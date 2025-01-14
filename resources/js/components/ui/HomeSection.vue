<template>
    <div class="mb-12">
        <h2 class="text-xl text-gray-600 mb-6">{{ title }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeSection',
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script> 