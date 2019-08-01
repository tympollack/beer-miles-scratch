<template>
    <v-app>
        <v-container>
            <app-content v-if="userId" />
            <login-page v-else />
        </v-container>
    </v-app>
</template>

<script>
    import LoginPage from './views/LoginPage'
    import AppContent from './views/AppContent'
    import firebase from './config/firebase'

    export default {
        name: 'App',
        components: {
            AppContent,
            LoginPage,
        },

        data: () => ({
            userId: null
        }),

        created: function() {
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    if (user.emailVerified) this.userId = user.uid
                    else firebase.auth().signOut().then()
                }
                else this.userId = null
                console.log('user id:', this.userId)
            })
        }
    }
</script>
