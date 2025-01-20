<template>
    <li>
        <router-link 
            :to="to"
            class="text-gray-800 hover:bg-blue-50 hover:text-blue-600 block px-3 py-2 rounded-md transition-colors"
            :class="{ 'bg-blue-50 text-blue-600 font-medium': isActive }"
        >
            {{ label }}
        </router-link>
    </li>
</template>

<script>
export default {
    name: 'NavItem',
    props: {
        to: {
            type: String,
            required: true
        },
        label: {
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