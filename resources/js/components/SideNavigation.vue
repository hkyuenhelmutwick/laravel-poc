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
                <li>
                    <span class="text-gray-600 font-medium uppercase text-xs tracking-wider block py-2">
                        Maintenance
                    </span>
                    <ul class="ml-2 space-y-1">
                        <li>
                            <router-link 
                                to="/tender"
                                class="text-gray-800 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md transition-colors"
                                :class="{ 'bg-blue-50 text-blue-600 font-medium': isActive('/tender') }"
                            >
                                Tender
                            </router-link>
                        </li>
                        <li v-for="(link, index) in maintenanceLinks" :key="index">
                            <router-link 
                                :to="link.path"
                                class="text-gray-800 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md transition-colors"
                                :class="{ 'bg-blue-50 text-blue-600 font-medium': isActive(link.path) }"
                            >
                                {{ link.name }}
                            </router-link>
                        </li>
                    </ul>
                </li>

                <!-- Report Section -->
                <li>
                    <span class="text-gray-600 font-medium uppercase text-xs tracking-wider block py-2">
                        Report
                    </span>
                    <ul class="ml-2 space-y-1">
                        <li>
                            <router-link 
                                to="/tender-evaluation-score"
                                class="text-gray-800 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md transition-colors"
                                :class="{ 'bg-blue-50 text-blue-600 font-medium': isActive('/tender-evaluation-score') }"
                            >
                                Tender Evaluation Score
                            </router-link>
                        </li>
                    </ul>
                </li>

                <!-- System Setting Section -->
                <li>
                    <span class="text-gray-600 font-medium uppercase text-xs tracking-wider block py-2">
                        System Setting
                    </span>
                    <ul class="ml-2 space-y-1">
                        <li v-for="(link, index) in settingLinks" :key="index">
                            <router-link 
                                :to="link.path"
                                class="text-gray-800 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md transition-colors"
                                :class="{ 'bg-blue-50 text-blue-600 font-medium': isActive(link.path) }"
                            >
                                {{ link.name }}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'SideNavigation',
    data() {
        return {
            maintenanceLinks: [
                { name: 'Tender Form Template', path: '/tender-form-template' },
                { name: 'External Panel Interviewer', path: '/external-panel-interviewer' },
                { name: 'Technical Evaluation', path: '/technical-evaluation' },
                { name: 'Fee Evaluation', path: '/fee-evaluation' }
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