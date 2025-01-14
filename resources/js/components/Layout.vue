<template>
    <div class="flex min-h-screen bg-gray-50">
        <SideNavigation />
        <main class="flex-1 p-8">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import SideNavigation from './SideNavigation.vue'

export default {
    name: 'Layout',
    components: {
        SideNavigation
    }
}
</script> 