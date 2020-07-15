import { ActionTree } from 'vuex'
import { RootState } from './state'
import { Auth } from '~/typings/auth/interfaces/auth.interface'
import { RootActions } from '~/typings/store/root/enum/actions.enum'
import { ILogin } from '~/typings/auth/interfaces/login.interface'
const cookieparser = process.server ? require('cookieparser') : undefined
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  async nuxtServerInit({ commit }, { req }) {
    let auth = null
    // Since we don't have localStorage in server side, we gotta use cookie instead
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        auth = JSON.parse(parsed.auth)
      } catch (err) {
        // No valid cookie found
      }
    }
    commit('SET_AUTH', auth)
  },
  async [RootActions.login]({ commit }, form: ILogin) {
    setTimeout(() => {
      console.log(form)
      // We simulate the async request with timeout.
      // Replace the whole thing with a nice axios request to obtain the auth instance as usual
      // This use a constain as an example
      const auth: Auth = {
        currentUser: {
          fullname: 'Someone',
          email: 'Some email'
        },
        accessToken: 'yourAccessTokenFromBackend'
      }
      Cookie.set('auth', auth, { expires: 365 }) // Saving token in cookie for server rendering
      commit('SET_AUTH', auth) // Mutating to store for client rendering
    }, 1000)
  },
  async [RootActions.logout]({ commit }) {
    await Cookie.remove('auth')
    commit('SET_AUTH', null)
  }
} as ActionTree<RootState, RootState>
