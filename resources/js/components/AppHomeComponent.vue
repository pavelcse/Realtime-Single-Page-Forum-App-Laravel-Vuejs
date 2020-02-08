<template>
    <div>
        <toolbar></toolbar>

            <router-view></router-view>

        <app-footer></app-footer>
    </div>
</template>

<script>
    import toolbar from './ToolbarComponent'
    import appFooter from './FooterComponent'

    export default {
        name: "AppHomeComponent",
        components: {toolbar, appFooter}
    }
</script>

<style scoped>

</style>
