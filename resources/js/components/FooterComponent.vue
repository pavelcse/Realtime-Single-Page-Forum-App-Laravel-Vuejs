<template>
    <v-card height="150">
        <v-footer
            absolute
            class="font-weight-medium"
        >
            <v-col
                class="text-center"
                cols="12"
            >
                {{ new Date().getFullYear() }} — <strong>Pavel Parvej</strong>
            </v-col>
        </v-footer>
    </v-card>
</template>

<script>
    export default {
        name: "FooterComponent"
    }
</script>

<style scoped>

</style>
