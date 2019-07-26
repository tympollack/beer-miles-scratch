<template>
    <v-app>
        <v-container>
            <app-content v-if="userId"
                         @logout="logout"
            />
            <login-page v-else
                        :error-message="errorMessage"
                        @loginEmail="loginEmail"
                        @loginGoogle="loginGoogle"
                        @loginFacebook="loginFacebook"
            />
        </v-container>
    </v-app>
</template>

<script>
    import LoginPage from "./views/LoginPage"
    import AppContent from "./views/AppContent"
    import firebase from './config/firebase'

    export default {
        name: 'App',
        components: {
            AppContent,
            LoginPage,
        },

        data: () => ({
            errorMessage: null,
            userId: null
        }),

        methods: {
            loginEmail: async function(email, password) {
                try {
                    await firebase.auth().signInWithEmailAndPassword(email, password)
                    if (firebase.auth().currentUser !== null) {
                        this.userId = firebase.auth().currentUser.uid
                        console.log("user id: " + this.userId)
                    }
                } catch(e) {
                    console.error(e.message)
                    this.errorMessage = e.message
                }
            },

            loginFacebook: async function() {
                // todo - register with fb
                const provider = new firebase.auth.FacebookAuthProvider()
                await firebase.auth().signInWithPopup(provider)
                if (firebase.auth().currentUser !== null){
                    this.userId = firebase.auth().currentUser.uid
                    console.log("user id: " + this.userId)
                }
            },

            loginGoogle: async function() {
                const provider = new firebase.auth.GoogleAuthProvider()
                await firebase.auth().signInWithPopup(provider)
                if (firebase.auth().currentUser !== null){
                    this.userId = firebase.auth().currentUser.uid
                    console.log("user id: " + this.userId)
                }
            },

            logout: async function() {
                try {
                    await firebase.auth().signOut()
                    this.userId = null
                    console.log('user logged out')
                } catch (e){
                    console.error(e)
                }
            }
        }
    }
</script>
