<template>
    <div class="flex min-h-screen">
        <!-- Fixed Side Navigation -->
        <aside class="fixed top-0 left-0 h-screen w-72 bg-white shadow-sm z-10">
            <SideNavigation />
        </aside>

        <!-- Main Content Area with left margin to prevent overlap -->
        <div class="flex-1 ml-72">
            <!-- Fixed Header -->
            <header class="fixed top-0 right-0 left-[18rem] bg-white shadow-sm z-10">
                <Header />
            </header>

            <!-- Scrollable Main Content with top padding for header -->
            <main class="pt-14 p-8">
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