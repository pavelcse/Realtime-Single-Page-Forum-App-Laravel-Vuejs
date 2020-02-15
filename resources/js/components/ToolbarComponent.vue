<template>
    <v-card
        color="grey lighten-4"
        flat
        tile
    >
        <v-toolbar dense>
<!--            <v-app-bar-nav-icon></v-app-bar-nav-icon>-->

            <v-toolbar-title>Pavel</v-toolbar-title>

            <v-spacer></v-spacer>

            <router-link v-for="(item, index) in items"
                         :key="index"
                         :to="item.to"
                         v-if="item.show">
                <v-btn class="ma-2" rounded color="primary">
                    <span>{{ item.title }}</span>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-btn>
            </router-link>

        </v-toolbar>
    </v-card>
</template>

<script>
    export default {
        name: "ToolbarComponent",
        data() {
            return {
                items: [
                    {title: 'Forum', to: '/forum', show: true, icon: ''},
                    {title: 'Ask Question', to: '/ask', show: User.loggedIn(), icon: ''},
                    {title: 'Category', to: '/category', show: User.loggedIn(), icon: ''},
                    {title: 'Login', to: '/login', show: !User.loggedIn(), icon: ''},
                    {title: 'Logout', to: '/logout', show: User.loggedIn(), icon: ''}
                ]
            }
        },
        created() {
            EventBus.$on('logout', () => {
                User.logout();
            })
        }
    }
</script>

<style scoped>

</style>
