<template>
    <Layout />
</template>

<script>
    import { defineComponent } from 'vue'
    import Layout from './layout/index.vue'
    export default defineComponent({
        name: 'App',
        components: {
            Layout
        }
    })
</script>
