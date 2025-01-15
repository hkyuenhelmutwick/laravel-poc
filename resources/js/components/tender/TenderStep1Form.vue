<template>
    <div>
        <TenderSetupSection 
            v-model="form"
        /><br/>
        
        <PanelInterviewer 
            v-model:user-groups="form.userGroups"
        /><br/>
        
        <ScoreSetup
            v-model:scores="form.scores"
        />
    </div>
</template>

<script>
import TenderSetupSection from './TenderSetupSection.vue'
import PanelInterviewer from './PanelInterviewer.vue'
import ScoreSetup from './ScoreSetup.vue'

export default {
    components: {
        TenderSetupSection,
        PanelInterviewer,
        ScoreSetup
    },
    name: 'TenderForm',
    data() {
        return {
            form: {
                tenderName: '',
                status: 'Draft',
                closeTenderAt: '',
                publishAt: '',
                expireAt: '',
                tenderType: 'Request for Proposal',
                tenderAdmins: [],
                userGroups: [],
                scores: []
            }
        }
    }
}
</script> 