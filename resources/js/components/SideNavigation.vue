<template>
    <nav class="bg-white w-64 min-h-screen shadow-md">
        <!-- Logo Section -->
        <div class="p-6 border-b border-gray-200">
            <img src="/assets/plklogo.png" alt="Po Leung Kuk Logo" class="w-200 h-10 mr-3">
        </div>

        <!-- Navigation Menu -->
        <div class="px-6 py-4">
            <ul class="space-y-6">
                <!-- Maintenance Section -->
                <nav-section 
                    title="Maintenance"
                    :links="maintenanceLinks"
                />

                <!-- Report Section -->
                <nav-section 
                    title="Report"
                    :links="reportLinks"
                />

                <!-- System Setting Section -->
                <nav-section 
                    title="System Setting"
                    :links="settingLinks"
                />
            </ul>
        </div>
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