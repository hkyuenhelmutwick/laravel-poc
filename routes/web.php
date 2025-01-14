<?php

use Illuminate\Support\Facades\Route;

// Main route
Route::get('/', function () {
    return view('welcome');
});

// Maintenance routes
Route::get('/tender', function () {
    return view('welcome');
});
Route::get('/tender-form-template', function () {
    return view('welcome');
});
Route::get('/external-panel-interviewer', function () {
    return view('welcome');
});
Route::get('/technical-evaluation', function () {
    return view('welcome');
});
Route::get('/fee-evaluation', function () {
    return view('welcome');
});

// Report routes
Route::get('/tender-evaluation-score', function () {
    return view('welcome');
});

// System Setting routes
Route::get('/user', function () {
    return view('welcome');
});
Route::get('/role', function () {
    return view('welcome');
});
Route::get('/function-permission', function () {
    return view('welcome');
});

// Catch all other routes and redirect to welcome view
// This ensures Vue router can handle client-side routing
Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
