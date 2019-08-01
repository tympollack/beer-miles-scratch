const $user__state = {
    user: 'User',
    strava: 'Strava',
    runs: 'Runs',
    watchlist: 'Watchlist'
}
const $user__getters = {
    getUser: 'Get User',
    getStrava: 'Get Strava',
    getRuns: 'Get Runs',
    getWatchlist: 'Get Watchlist'
}
const $user__mutations = {}
const $user__actions = {}

const state = {
    [$user__state.user]: {
        firstName: '',
        lastName: '',
        city: '',
        state: '',
        zip: '',
        email: '',
        about: ''
    },

    [$user__state.strava]: {
        athleteId: '',
        accessToken: '',
        refreshToken: ''
    },

    [$user__state.runs]: [],

    [$user__state.watchlist]: []
}
const getters = {}
const mutations = {}
const actions = {}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}

export {
    $user__state,
    $user__getters,
    $user__mutations,
    $user__actions
}