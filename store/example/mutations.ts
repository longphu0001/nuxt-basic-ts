import { MutationTree } from 'vuex'
import { ExampleState } from './state'
export default {
  INCREASE_COUNT(state: ExampleState) {
    state.count++
  }
} as MutationTree<ExampleState>
