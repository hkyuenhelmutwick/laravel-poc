<template>
    <li>
        <section-header>{{ title }}</section-header>
        <ul class="ml-2 space-y-1">
            <nav-item 
                v-for="(link, index) in links" 
                :key="index"
                :to="link.path"
                :label="link.name"
            />
        </ul>
    </li>
</template>

<script>
import SectionHeader from './SectionHeader.vue'
import NavItem from './NavItem.vue'

export default {
    name: 'NavSection',
    components: {
        SectionHeader,
        NavItem
    },
    props: {
        title: {
            type: String,
            required: true
        },
        links: {
            type: Array,
            required: true
        }
    }
}
</script> 