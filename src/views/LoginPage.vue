<template>
    <v-layout
            align-center
            justify-center
            fill-height
    >
        <v-flex xs12 sm10 md7 xl5>
            <v-card class="grey--text text--darken-2 mb-3 cursor--default login-width">

            <img
                    :src="require('../assets/road-to-beer.jpg')"
                    alt="The road to glory is paved in beer."
                    width="100%"
            />

            <v-layout
                    align-center
                    justify-center
                    fill-height
                    column
            >
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0 text-xs-center">
                            <span v-if="signup"><a @click="signup = false">Already have an account? Login instead!</a></span>
                            <span v-else>Login or <a @click="signup = true">Sign Up</a></span>
                        </h3>
                        <v-layout row wrap>
                            <v-flex xs12>
                                <h4 class="headline text-xs-center">{{ errorMessage }}</h4>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field
                                        v-model="email"
                                        label="Email"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field
                                        v-model="password"
                                        :append-icon="showPass ? 'visibility' : 'visibility_off'"
                                        :type="showPass ? 'text' : 'password'"
                                        label="Password"
                                        @click:append="showPass = !showPass"
                                ></v-text-field>
                            </v-flex>
                            <v-flex v-if="signup" xs12>
                                <v-text-field
                                        v-model="password2"
                                        :append-icon="showPass2 ? 'visibility' : 'visibility_off'"
                                        :type="showPass2 ? 'text' : 'password'"
                                        label="Confirm Password"
                                        @click:append="showPass2 = !showPass2"
                                ></v-text-field>
                            </v-flex>
                            <v-flex xs6>
                                <a v-if="signup" @click="signupEmail">Sign me up!</a>
                                <a v-else @click="loginEmail">Login</a>
                            </v-flex>
                        </v-layout>
                    </div>
                </v-card-title>

                <v-card-actions v-if="!signup">
                    <a href="#" @click.prevent="loginGoogle">
                        <img :src="require('../assets/signin-google.png')" alt="Sign in with Google"/>
                    </a>
                    <a href="#" @click.prevent="loginFacebook">
                        <img width="200px" :src="require('../assets/signin-facebook.png')" alt="Sign in with Facebook"/>
                    </a>
                </v-card-actions>

                <!--        <v-progress-circular-->
                <!--                v-if="loading"-->
                <!--                color="primary-lighten-1"-->
                <!--                indeterminate-->
                <!--        ></v-progress-circular>-->
                <!--        <template v-else-if="errorMessage">{{ errorMessage }}</template>-->
                <!--        <slot v-else></slot>-->

            </v-layout>

            <v-footer class="no-print"
                      color="white"
                      height="16px"
            >
                <!--<v-card-actions class="pb-1" style="width:100%" >-->
                <!--<card-button>chevron-left</card-button>-->
                <!--<card-button>chevron-right</card-button>-->
                <!--<v-spacer></v-spacer>-->
                <!--<card-button>rotate-3d</card-button>-->
                <!--</v-card-actions>-->
            </v-footer>
        </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import firebase from '../config/firebase'

    export default {
        name: "LoginPage",

        data: () => ({
            email: null,
            password: null,
            password2: null,
            showPass: false,
            showPass2: false,
            errorMessage: '',
            signup: false
        }),

        methods: {
            loginEmail: async function() {
                try {
                    await firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    const user = firebase.auth().currentUser
                    if (user && !user.emailVerified) {
                        this.errorMessage = 'This email address has not been verified.'
                        this.password = null
                    }
                } catch(e) {
                    console.error(e.message)
                    this.errorMessage = e.message
                    this.password = null
                }
            },

            loginFacebook: async function() {
                // todo - register with fb
                const provider = new firebase.auth.FacebookAuthProvider()
                await firebase.auth().signInWithRedirect(provider)
            },

            loginGoogle: async function() {
                const provider = new firebase.auth.GoogleAuthProvider()
                await firebase.auth().signInWithRedirect(provider)
            },

            signupEmail: async function() {
                if (this.password !== this.password2) {
                    this.errorMessage = "Passwords must match!"
                    return
                }

                try {
                    await firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    await firebase.auth().currentUser.sendEmailVerification()
                    this.errorMessage = 'Check your email for account verification.'
                    this.email = null
                    this.password = null
                    this.password2 = null
                    this.signup = false
                } catch(e) {
                    console.error(e.message)
                    this.errorMessage = e.message
                }
            }
        }
    }
</script>

<style scoped>

</style>