<template>
    <div>
        <!-- Page Title -->
        <div class="mb-6">
            <h1 class="text-2xl font-semibold text-gray-800">Define Tender Evaluation</h1>
        </div>

        <!-- Steps Component -->
        <TenderSteps 
            :current-step="2"
            @update:step="updateStep"
        />

        <div class="bg-white rounded-lg p-6 shadow-sm space-y-8">
            <!-- Form Component -->
            <TenderStep2Form 
                v-model="formData"
                @update:form-data="updateFormData"
            />

            <!-- Action Buttons -->
            <ActionButtons
                @back="handleBack"
                @save-draft="saveDraft"
                @next="handleNext"
            />
        </div>
    </div>
</template>

<script>
import TenderSteps from '../components/tender/TenderSteps.vue'
import TenderStep2Form from '../components/tender/TenderStep2Form.vue'
import ActionButtons from '../components/ui/ActionButtons.vue'

export default {
    name: 'TenderStep2',
    components: {
        TenderSteps,
        TenderStep2Form,
        ActionButtons
    },
    data() {
        return {
            formData: {}
        }
    },
    methods: {
        updateStep(step) {
            // Handle step navigation
        },
        updateFormData(newData) {
            this.formData = newData
        },
        handleBack() {
            // Navigate back to Tender page
            this.$router.push('/tender')
        },
        saveDraft() {
            // Handle save draft
            console.log('Saving evaluation draft')
        },
        handleNext() {
            // Navigate to next step (vendor)
            this.$router.push('/tender/vendor')
        }
    }
}
</script> 