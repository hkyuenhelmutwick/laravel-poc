<template>
    <header class="bg-white shadow-sm">
        <div class="flex justify-end items-center px-6 py-3">
            <div class="flex items-center space-x-4">
                <!-- User Profile -->
                <div class="flex items-center text-gray-700">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span class="text-sm">Chung Cho Ho, Leo</span>
                </div>

                <!-- Logout Button -->
                <button 
                    @click="logout" 
                    class="flex items-center text-gray-700 hover:text-gray-900"
                >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                </button>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        logout() {
            // Implement logout logic here
            console.log('Logout clicked')
        }
    }
}
</script> 