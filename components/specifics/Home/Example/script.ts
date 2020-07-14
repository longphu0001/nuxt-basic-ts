import { Component, Vue, Mutation, State } from 'nuxt-property-decorator'
import { Auth } from '~/store/types/interfaces/auth.interface'
@Component({})
export default class Example extends Vue {
  randomNumber: number = 10
  @State('example') example!: string
  @State('auth') auth!: Auth
  // Mutation mapping with type check for payload example:
  @Mutation('SET_AUTH') SET_AUTH!: Auth
  // Then, if you want to get into auth and get currentUser
  get currentUser() {
    return this.auth.currentUser
  }

  mounted() {
    // this.randomNumber = this.currentUser // Type error
    // this.SET_AUTH(this.randomNumber) // Type error
    this.$emit('randomBus')
    console.log(this.currentUser)
  }
}
