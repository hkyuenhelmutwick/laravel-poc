<template>
    <li class="mb-6">
        <span class="text-gray-600 font-medium text-xs uppercase tracking-wider block py-2">
            {{ title }}
        </span>
        <ul class="pl-2 space-y-1">
            <slot></slot>
        </ul>
    </li>
</template>

<script>
export default {
    name: 'Section',
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script> 