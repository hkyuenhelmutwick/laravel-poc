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
    </div>
</template>

<script>
import TenderSteps from '../components/tender/TenderSteps.vue'
import TenderForm from '../components/tender/TenderForm.vue'

export default {
    name: 'Tender',
    components: {
        TenderSteps,
        TenderForm
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
            if (this.currentStep > 1) {
                this.currentStep--
            }
        },
        handleNext(formData) {
            // Validate form data
            if (this.validateForm(formData)) {
                if (this.currentStep < 4) {
                    this.currentStep++
                }
            }
        },
        validateForm(formData) {
            // Add validation logic here
            return true
        }
    }
}
</script> 