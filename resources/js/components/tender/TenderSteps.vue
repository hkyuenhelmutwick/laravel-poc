<template>
    <div class="flex items-center justify-between mb-8">
        <StepButton
            :stepNumber="1"
            label="Assessment Setup"
            icon="GridIcon"
            :is-active="currentStep === 1"
            :is-disabled="false"
            @click="goToStep(1)"
        />

        <StepButton
            :stepNumber="2"
            label="Define Tender Evaluation"
            icon="ListIcon"
            :is-active="currentStep === 2"
            :is-disabled="currentStep < 2"
            @click="goToStep(2)"
        />

        <StepButton
            :stepNumber="3"
            label="Insert Vendor for Assessment"
            icon="CogIcon"
            :is-active="currentStep === 3"
            :is-disabled="currentStep < 3"
            @click="goToStep(3)"
        />

        <StepButton
            :stepNumber="4"
            label="Overview"
            icon="PlayIcon"
            :is-active="currentStep === 4"
            :is-disabled="currentStep < 4"
            :is-last="true"
            @click="goToStep(4)"
        />
    </div>
</template>

<script>
import StepButton from './StepButton.vue'

export default {
    name: 'TenderSteps',
    components: {
        StepButton
    },
    props: {
        currentStep: {
            type: Number,
            default: 1
        }
    },
    methods: {
        goToStep(step) {
            if (!this.isStepDisabled(step)) {
                this.$emit('update:step', step)
                
                // Navigate to corresponding route
                const routes = {
                    1: '/tender',
                    2: '/tender/evaluation',
                    3: '/tender/vendor',
                    4: '/tender/overview'
                }
                
                if (routes[step]) {
                    this.$router.push(routes[step])
                }
            }
        },
        isStepDisabled(step) {
            return step > this.currentStep
        }
    }
}
</script> 