<template>
    <div class="flex min-h-screen bg-gray-50">
        <SideNavigation />
        <div class="flex-1 flex flex-col">
            <Header />
            <main class="flex-1 p-8">
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