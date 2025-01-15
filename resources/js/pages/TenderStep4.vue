<template>
    <div class="container mx-auto p-4">
        <TenderSteps :currentStep="4" />
        <div class="bg-white rounded-lg p-6 shadow-sm space-y-8">
            <h2 class="text-xl font-semibold mb-4">Overview</h2>
            <TenderStep4Form />
            <ActionButtons 
                @back="goBack" 
                @save-draft="saveDraft"
                @ready-evaluation="readyForEvaluation"
                :showNext="false"
                :showReadyForEvaluation="true"
                backLabel="Back"
            />
        </div>
    </div>
</template>

<script>
import TenderSteps from '../components/tender/TenderSteps.vue'
import TenderStep4Form from '../components/tender/TenderStep4Form.vue'
import ActionButtons from '../components/ui/ActionButtons.vue'
import { useRouter } from 'vue-router'

export default {
    components: {
        TenderSteps,
        TenderStep4Form,
        ActionButtons
    },
    setup() {
        const router = useRouter()

        const goBack = () => {
            router.push('/tender/vendor')
        }

        const saveDraft = () => {
            // Implement save draft functionality
        }

        const readyForEvaluation = () => {
            // Implement ready for evaluation functionality
        }

        return {
            goBack,
            saveDraft,
            readyForEvaluation
        }
    }
}
</script> 