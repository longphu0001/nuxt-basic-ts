import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { MutationsEnum } from '~/typings/store/example/enum/mutations.enum'
@Module({
  name: 'example',
  stateFactory: true,
  namespaced: true
})
export default class ExampleModule extends VuexModule {
  count: number = 2

  get countValue(): number {
    return this.count
  }

  @Mutation
  [MutationsEnum.INCREASE_COUNT]() {
    this.count++
  }
}
