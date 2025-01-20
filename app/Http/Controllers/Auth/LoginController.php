<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json(['message' => 'Validation failed'], 422);
        }

        $username = $request->input('username');
        $isEmail = filter_var($username, FILTER_VALIDATE_EMAIL);

        // First try AD authentication if not an email
        if (!$isEmail && env('APP_ENV') !== 'local') {
            $ldapServers = [
                '10.1.88.1',
                '10.1.88.4',
                '10.1.89.5',
                '10.1.88.3',
                '10.1.88.7'
            ];

            foreach ($ldapServers as $server) {
                if ($this->isServerAlive($server)) {
                    if ($this->attemptLDAPLogin($request, $server)) {
                        $user = User::where('username', $username)->first();
                        if (!$user) {
                            return response()->json(['message' => 'User not found'], 404);
                        }
                        $token = $user->createToken('auth-token')->plainTextToken;
                        
                        return response()->json([
                            'token' => $token,
                            'user' => $user
                        ]);
                    }
                }
            }
        }

        // Regular email authentication
        if ($isEmail) {
            if (Auth::attempt([
                'email' => $username,
                'password' => $request->password
            ])) {
                $user = Auth::user();
                $token = $user->createToken('auth-token')->plainTextToken;

                return response()->json([
                    'token' => $token,
                    'user' => $user
                ]);
            }
        }

        return response()->json([
            'message' => 'Invalid credentials'
        ], 401);
    }

    protected function isServerAlive($hostname, $port = 389, $timeout = 5)
    {
        $connection = @fsockopen($hostname, $port, $errno, $errstr, $timeout);
        if ($connection) {
            fclose($connection);
            return true;
        }
        return false;
    }

    protected function attemptLDAPLogin(Request $request, $ldapServer)
    {
        $username = $request->input('username');
        $password = $request->input('password');
        $adDomain = "plkvcb";

        try {
            $ldaprdn = $adDomain . "\\" . $username;
            $ldapconn = ldap_connect('ldap://' . $ldapServer);
            ldap_set_option($ldapconn, LDAP_OPT_PROTOCOL_VERSION, 3);
            ldap_set_option($ldapconn, LDAP_OPT_REFERRALS, 0);

            $bind = @ldap_bind($ldapconn, $ldaprdn, $password);

            if ($bind) {
                $user = User::where('username', $username)->first();
                if (!$user) {
                    return false;
                }
                Auth::login($user);
                return true;
            }
            return false;
        } catch (\Exception $e) {
            Log::error('LDAP Error: ' . $e->getMessage());
            return false;
        }
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logged out']);
    }

    public function user(Request $request)
    {
        return response()->json($request->user());
    }
} 