<template>
    <div class="flex flex-col items-center">
        <!-- Step Number -->
        <div class="font-semibold text-lg text-gray-800 mb-2 w-32 text-center">
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
                    'w-32 h-32 rounded-lg flex flex-col items-center justify-center',
                    isActive ? 'bg-blue-100' : 'bg-white shadow-sm hover:shadow-md',
                    isDisabled ? 'opacity-50 cursor-not-allowed' : 'transition-shadow'
                ]">
                    <!-- Icon -->
                    <component :is="icon" class="w-8 h-8 text-gray-500 mb-3" />
                    
                    <!-- Label inside button -->
                    <span class="text-sm text-gray-600 text-center px-2">{{ label }}</span>
                </div>
            </button>
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
        }
    }
}
</script> 