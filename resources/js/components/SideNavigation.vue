<template>
    <nav class="h-full overflow-y-auto bg-white">
        <div class="p-6 border-b border-gray-200">
            <img src="/assets/plklogo.png" alt="Logo"  />
        </div>

        <ul class="p-4">
            <nav-section 
                title="Maintenance"
                :links="maintenanceLinks"
            />

            <nav-section 
                title="Report"
                :links="reportLinks"
            />

            <nav-section 
                title="System Setting"
                :links="settingLinks"
            />
        </ul>
    </nav>
</template>

<script>
import NavSection from './SideNavigation/NavSection.vue'

export default {
    name: 'SideNavigation',
    components: {
        NavSection
    },
    data() {
        return {
            maintenanceLinks: [
                { name: 'Tender', path: '/tender' },
                { name: 'Tender Form Template', path: '/tender-form-template' },
                { name: 'External Panel Interviewer', path: '/external-panel-interviewer' },
                { name: 'Technical Evaluation', path: '/technical-evaluation' },
                { name: 'Fee Evaluation', path: '/fee-evaluation' }
            ],
            reportLinks: [
                { name: 'Tender Evaluation Score', path: '/tender-evaluation-score' }
            ],
            settingLinks: [
                { name: 'User', path: '/user' },
                { name: 'Role', path: '/role' },
                { name: 'Function Permission', path: '/function-permission' }
            ]
        }
    },
    methods: {
        isActive(path) {
            return this.$route.path === path;
        }
    }
}
</script>