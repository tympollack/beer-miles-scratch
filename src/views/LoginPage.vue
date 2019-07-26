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
                        <h3 class="headline mb-0 text-xs-center">Login or <a>Sign Up</a></h3>
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
                            <v-flex xs6>
                                <a @click.prevent="$emit('loginEmail', email, password)">Login</a>
                            </v-flex>
                        </v-layout>
                    </div>
                </v-card-title>

                <v-card-actions>
                    <a href="#" @click.prevent="$emit('loginGoogle')">
                        <img :src="require('../assets/signin-google.png')" alt="Sign in with Google"/>
                    </a>
                    <a href="#" @click.prevent="$emit('loginFacebook')">
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
    import { firebase } from '../config/firebase'

    export default {
        name: "LoginPage",

        props: {
            errorMessage: String
        },

        data: () => ({
            email: null,
            password: null,
            showPass: false
        })
    }
</script>

<style scoped>

</style>