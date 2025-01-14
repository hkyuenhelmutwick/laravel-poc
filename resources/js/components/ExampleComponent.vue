<template>
    <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-2xl font-bold mb-4">{{ title }}</h2>
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Example Component',
            message: 'This is a Vue 3 component in Laravel!'
        }
    }
}
</script> 