import { MutationTree } from 'vuex'
import { Auth } from '../core/interfaces/auth/auth.interface'
import { RootState } from './state'
export default {
  SET_LANG(state: RootState, locale: string) {
    if (state.locales.includes(locale)) {
      state.locale = locale
      localStorage.setItem('locale', locale)
    }
  },
  SET_AUTH(state: RootState, auth: Auth) {
    state.auth = auth
  }
} as MutationTree<RootState>
