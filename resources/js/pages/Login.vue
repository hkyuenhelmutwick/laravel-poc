<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
        <div class="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
            <h2 class="text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
            </h2>
            
            <!-- Error Alert -->
            <div v-if="error" class="bg-red-50 text-red-700 p-4 rounded-md mb-4">
                {{ error }}
            </div>
            
            <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
                <div class="rounded-md shadow-sm space-y-4">
                    <div>
                        <label for="username" class="sr-only">Username or Email</label>
                        <input
                            id="username"
                            v-model="form.username"
                            type="text"
                            required
                            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Username or Email"
                        >
                    </div>
                    <div>
                        <label for="password" class="sr-only">Password</label>
                        <input
                            id="password"
                            v-model="form.password"
                            type="password"
                            required
                            class="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Password"
                        >
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        :disabled="loading"
                    >
                        {{ loading ? 'Signing in...' : 'Sign in' }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const authStore = useAuthStore()
        const router = useRouter()
        const loading = ref(false)
        const form = ref({
            username: '',
            password: ''
        })
        
        const error = computed(() => authStore.error)

        const handleLogin = async () => {
            try {
                loading.value = true
                await authStore.login(form.value)
                router.push('/')
            } catch (error) {
                console.error('Login failed:', error)
            } finally {
                loading.value = false
            }
        }

        return {
            form,
            loading,
            handleLogin,
            error
        }
    }
}
</script> 