<template>
    <div class="flex flex-col items-center">
        <!-- Step Number -->
        <div class="text-sm text-gray-600 mb-2">
            Step {{ stepNumber }}
        </div>

        <!-- Button Container -->
        <div class="flex items-center">
            <!-- Button -->
            <button 
                @click="$emit('click')"
                class="flex flex-col items-center"
            >
                <div :class="[
                    'rounded-lg p-4 mb-2 flex items-center justify-center w-16 h-16',
                    isActive ? 'bg-blue-100' : 'bg-white',
                    isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
                ]">
                    <component :is="icon" class="w-8 h-8 text-gray-600" />
                </div>
                <span class="text-sm text-gray-600 text-center w-32">{{ label }}</span>
            </button>

            <!-- Arrow -->
            <div v-if="!isLast" class="mx-4">
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StepButton',
    props: {
        stepNumber: {
            type: Number,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        isActive: {
            type: Boolean,
            default: false
        },
        isDisabled: {
            type: Boolean,
            default: false
        },
        isLast: {
            type: Boolean,
            default: false
        }
    }
}
</script> 