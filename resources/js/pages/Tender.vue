<template>
    <div>
        <!-- Page Title -->
        <div class="mb-6">
            <h1 class="text-2xl font-semibold text-gray-800">Tender Assessment</h1>
        </div>

        <!-- Steps Component -->
        <TenderSteps 
            :current-step="currentStep"
            @update:step="updateStep"
        />

        <!-- Form Component -->
        <TenderForm 
            :initial-data="formData"
            @save-draft="saveDraft"
            @back="handleBack"
            @next="handleNext"
        />

        <ActionButtons
            @back="handleBack"
            @save-draft="saveDraft"
            @next="handleNext"
        />
    </div>
</template>

<script>
import TenderSteps from '../components/tender/TenderSteps.vue'
import TenderForm from '../components/tender/TenderForm.vue'
import ActionButtons from '../components/ui/ActionButtons.vue'

export default {
    name: 'Tender',
    components: {
        TenderSteps,
        TenderForm,
        ActionButtons
    },
    data() {
        return {
            currentStep: 1,
            formData: {
                tenderName: '',
                status: 'Draft',
                closeTenderAt: '',
                publishAt: '',
                expireAt: '',
                tenderType: 'Request for Proposal',
                tenderAdmin: [],
                userGroups: [],
                scores: {
                    maxScore: 3,
                    increment: 0.5
                }
            }
        }
    },
    methods: {
        updateStep(step) {
            this.currentStep = step
        },
        saveDraft(formData) {
            // Handle save draft logic
            console.log('Saving draft:', formData)
        },
        handleBack() {
            // Handle back navigation if needed
        },
        handleNext() {
            // Navigate to TenderStep2
            this.$router.push('/tender/evaluation')
        }
    }
}
</script> 