import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import userModule from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export const $store__modules = {
    user: 'User Store'
}

export default new Vuex.Store({
    modules: {
        [$store__modules.user]: userModule
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})