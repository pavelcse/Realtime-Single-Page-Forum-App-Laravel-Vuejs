<template>
    <v-container>
        <v-form
            ref="form"
            @submit.prevent="login"
        >
            <v-text-field
                v-model="form.email"
                label="Email"
                type="email"
                required
            ></v-text-field>

            <v-text-field
                v-model="form.password"
                label="Password"
                type="password"
                required
            ></v-text-field>


            <v-btn
                color="success"
                type="submit"
            >
                Login
            </v-btn>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "LoginComponent",
        data() {
            return {
                form : {
                    email : null,
                    password : null
                }
            }
        },
        methods : {
            login() {
                axios.post('/api/auth/login', this.form)
                .then(res => console.log(res.data))
                .catch(err => console.log(err.response.data))
            }
        }
    }
</script>

<style scoped>

</style>
