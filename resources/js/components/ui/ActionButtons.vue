<template>
    <div class="flex justify-end space-x-4">
        <button 
            @click="$emit('back')"
            class="px-4 py-2 border rounded-md hover:bg-gray-50"
        >
            <span class="flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
                Back
            </span>
        </button>

        <button 
            @click="$emit('save-draft')"
            class="px-4 py-2 border rounded-md hover:bg-gray-50"
        >
            <span class="flex items-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
                Save Draft
            </span>
        </button>

        <button 
            @click="$emit('next')"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
            <span class="flex items-center">
                Next
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'ActionButtons',
    emits: ['back', 'save-draft', 'next']
}
</script> 