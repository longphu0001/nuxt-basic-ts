import { MutationTree } from 'vuex'
import { RootState } from '.'
export default {
  SET_LANG(state: any, locale: string) {
    if (state.locales.includes(locale)) {
      state.locale = locale
      localStorage.setItem('locale', locale)
    }
  },
  SET_AUTH(state: any, auth: Auth) {
    state.auth = auth
  }
} as MutationTree<RootState>
