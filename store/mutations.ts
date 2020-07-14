import { MutationTree } from 'vuex'
import { Auth } from './types/interfaces/auth.interface'
import { RootState } from './state'
import { RootMutations } from './types/enum/mutations.enum'
export default {
  [RootMutations.SET_LANG](state: RootState, locale: string) {
    if (state.locales.includes(locale)) {
      state.locale = locale
      localStorage.setItem('locale', locale)
    }
  },
  [RootMutations.SET_AUTH](state: RootState, auth: Auth) {
    state.auth = auth
  }
} as MutationTree<RootState>
