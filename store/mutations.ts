import { MutationTree } from 'vuex'
import { RootState } from './state'
import { Auth } from '~/typings/store/root/interfaces/auth.interface'
import { RootMutations } from '~/typings/store/root/enum/mutations.enum'
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
