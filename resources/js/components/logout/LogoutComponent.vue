<template>

</template>

<script>
    export default {
        name: "LogoutComponent",
        created() {
            EventBus.$emit('logout');
        }
    }
</script>

<style scoped>

</style>
