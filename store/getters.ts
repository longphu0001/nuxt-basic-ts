import { GetterTree } from 'vuex'
import { RootState } from '.'
export default {
  // locale: state => state.locale
  // this.$store.getters['locale'] as ReturnType<typeof getters.locale>
} as GetterTree<RootState, RootState>
