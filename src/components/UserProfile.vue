<template>
    <v-container
            fill-height
            fluid
            grid-list-xl>
        <v-layout
                justify-center
                wrap
        >
            <v-flex
                    xs12
                    md8
            >
                <material-card
                        color="green"
                        title="Edit Profile"
                        text="Complete your profile"
                >
                    <v-form>
                        <v-container py-0>
                            <v-layout wrap>
                                <v-flex
                                        xs12
                                        md4
                                >
                                    <v-text-field
                                            label="Email Address"
                                            :value="user.email"
                                    />
                                </v-flex>
                                <v-flex
                                        xs12
                                        md6
                                >
                                    <v-text-field
                                            label="First Name"
                                            :value="user.firstName"
                                    />
                                </v-flex>
                                <v-flex
                                        xs12
                                        md6
                                >
                                    <v-text-field
                                            label="Last Name"
                                            :value="user.lastName"
                                    />
                                </v-flex>
                                <v-flex
                                        xs12
                                        md4>
                                    <v-text-field
                                            label="City"
                                            :value="user.city"
                                    />
                                </v-flex>
                                <v-flex
                                        xs12
                                        md4>
                                    <v-text-field
                                            label="State"
                                            :value="user.state"
                                    />
                                </v-flex>
                                <v-flex
                                        xs12
                                        md4>
                                    <v-text-field
                                            label="Postal Code"
                                            type="number"
                                            :value="user.zip"
                                    />
                                </v-flex>
                                <v-flex xs12>
                                    <v-textarea
                                            label="About Me"
                                            :value="user.about"
                                    />
                                </v-flex>
                                <v-flex
                                        xs12
                                        text-xs-right
                                >

                                    <v-btn
                                            class="mx-0 font-weight-light"
                                            color="success"
                                            @click="updateUserProfile"
                                    >
                                        Update Profile
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-form>
                </material-card>
            </v-flex>
            <v-flex
                    xs12
                    md4
            >
                <material-card class="v-card-profile">
                    <v-avatar
                            slot="offset"
                            class="mx-auto d-block"
                            size="130"
                    >
                        <img
                                src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
                        >
                    </v-avatar>
                    <v-card-text class="text-xs-center">
                        <h6 class="category text-gray font-weight-thin mb-3">CEO / CO-FOUNDER</h6>
                        <h4 class="card-title font-weight-light">{{user.firstName}} {{user.lastName}}</h4>
                        <p class="card-description font-weight-light">should i remove this area? idk yet</p>
                        <v-btn
                                color="success"
                                round
                                class="font-weight-light"
                        >
                            Follow
                        </v-btn>
                    </v-card-text>
                </material-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "user-profile",

        data: () => ({

        }),

        computed: {

        },

        methods: {

        },

        created: function() {
            const query = this.$route.query
            this.state = query.state
            this.code = query.code
            this.scope = query.scope

            // const athlete = await stravaUtils.getAthlete()
            // console.log(athlete)

            // const activityList = await stravaUtils.getActivityList()
            // console.log(activityList)
        }
    }
</script>

<style scoped>

</style>