<template>
    <div>
        <TenderSetupSection
            v-model="form"
        /><br/>
        
        <PanelInterviewer
            v-model:user-groups="form.userGroups"
        /><br/>
    </div>
</template>

<script>
import PanelInterviewer from './PanelInterviewer.vue'
import TenderSetupSection from './TenderSetupSection.vue'

export default {
    components: {
        PanelInterviewer,
        TenderSetupSection
    },
    name: 'TenderStep4Form',
    data() {
        return {
            form: {
                tenderName: '',
                status: 'Draft',
                closeTenderAt: '',
                publishAt: '',
                expireAt: '',
                tenderType: 'Request for Proposal',
                tenderAdmins: ['Raymond', 'Vincent'],
                userGroups: []
            }
        }
    }
}
</script> 