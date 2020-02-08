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

            <router-link to="/">
                <v-btn class="ma-2" rounded color="primary">
                    <span>Forum</span>
                    <v-icon>mdi-history</v-icon>
                </v-btn>
            </router-link>

            <router-link to="/">
                <v-btn class="ma-2" rounded color="primary">
                    <span>Ask Question</span>
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
            </router-link>

            <router-link to="/">
                <v-btn class="ma-2" rounded color="primary">
                    <span>Category</span>
                    <v-icon>mdi-map-marker</v-icon>
                </v-btn>
            </router-link>

            <router-link to="/login">
                <v-btn class="ma-2" rounded color="primary">
                    <span>Login</span>
                    <v-icon>mdi-map-marker</v-icon>
                </v-btn>
            </router-link>



        </v-toolbar>
    </v-card>
</template>

<script>
    export default {
        name: "ToolbarComponent"
    }
</script>

<style scoped>

</style>
