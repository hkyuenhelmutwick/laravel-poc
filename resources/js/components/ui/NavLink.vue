<template>
    <li>
        <router-link 
            :to="to"
            class="text-gray-800 text-sm block px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
            :class="{ 'bg-blue-50 text-blue-600 font-medium': isActive }"
        >
            <slot></slot>
        </router-link>
    </li>
</template>

<script>
export default {
    name: 'NavLink',
    props: {
        to: {
            type: String,
            required: true
        }
    },
    computed: {
        isActive() {
            return this.$route.path === this.to;
        }
    }
}
</script> 