<template>
    <router-link 
        :to="to" 
        class="flex flex-col items-center p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
        <svg class="w-12 h-12 text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path :d="icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </svg>
        <span class="text-gray-600">{{ title }}</span>
    </router-link>
</template>

<script>
export default {
    name: 'CardButton',
    props: {
        to: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    }
}
</script> 