<template>
    <div class="bg-white rounded-lg p-6 shadow-sm space-y-8">
        <TenderSetup 
            :form-data="form"
            @update:form-data="updateForm"
        />
        <PanelInterviewer 
            v-model:user-groups="form.userGroups"
        />
        <ScoreSetup
            v-model:scores="form.scores"
        />
    </div>
</template>

<script>
import TenderSetup from './TenderSetup.vue'
import PanelInterviewer from './PanelInterviewer.vue'
import ScoreSetup from './ScoreSetup.vue'

export default {
    components: {
        TenderSetup,
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
                userGroups: [],
                scores: []
            }
        }
    },
    methods: {
        updateForm(newData) {
            this.form = newData
        }
    }
}
</script> 