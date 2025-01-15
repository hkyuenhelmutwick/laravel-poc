<template>
    <div class="container mx-auto p-4">
        <TenderSteps :currentStep="3" />
        <div class="bg-white rounded-lg p-6 shadow-sm space-y-8">
            <TenderStep3Form />
            <ActionButtons 
                @back="goBack" 
                @next="goNext"
                :showSaveDraft="false"
                backLabel="Back"
                nextLabel="Next" 
            />
        </div>
    </div>
</template>

<script>
import TenderSteps from '../components/tender/TenderSteps.vue'
import TenderStep3Form from '../components/tender/TenderStep3Form.vue'
import ActionButtons from '../components/ui/ActionButtons.vue'
import { useRouter } from 'vue-router'

export default {
    components: {
        TenderSteps,
        TenderStep3Form,
        ActionButtons
    },
    setup() {
        const router = useRouter()

        const goBack = () => {
            router.push('/tender/evaluation')
        }

        const goNext = () => {
            router.push('/tender/overview')
        }

        return {
            goBack,
            goNext
        }
    }
}
</script> 