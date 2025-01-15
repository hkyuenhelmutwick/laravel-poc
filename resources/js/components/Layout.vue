<template>
    <div class="flex min-h-screen bg-gray-50">
        <!-- Side Navigation -->
        <aside class="flex-none w-64">
            <SideNavigation />
        </aside>

        <!-- Main Content Area -->
        <div class="flex-1 flex flex-col">
            <Header />
            <main class="flex-1 p-8 mt-14">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script>
import SideNavigation from './SideNavigation.vue'
import Header from './ui/Header.vue'

export default {
    name: 'Layout',
    components: {
        SideNavigation,
        Header
    }
}
</script> 