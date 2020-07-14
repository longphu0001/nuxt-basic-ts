import { Component, Vue, Mutation } from 'nuxt-property-decorator'
import { mapState } from 'vuex'
import { RootState } from '~/store/state'
import { Auth } from '~/store/types/interfaces/auth.interface'
@Component({
  computed: {
    ...mapState({
      example: 'locale',
      auth: 'auth'
    })
    // other stuff
  }
})
export default class Example extends Vue {
  randomNumber: number = 10
  // Your can get the state by mapState, then declare it and its type like this:
  example!: string
  // Map auth using mapState above, then declare it inside this class
  auth!: RootState['auth']
  // Then, if you want to get into auth and get currentUser
  get currentUser() {
    return this.auth.currentUser
  }

  // Mutation mapping with type check for payload example:
  @Mutation('SET_AUTH') SET_AUTH!: Auth

  mounted() {
    // this.randomNumber = this.currentUser // Type error
    // this.SET_AUTH(this.randomNumber) // Type error
    this.$emit('randomBus')
  }
}
