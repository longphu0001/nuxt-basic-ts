import { Component, Vue } from 'nuxt-property-decorator'
import { mapState } from 'vuex'
import { RootState } from '~/store/state'
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
  // Your can get the state by mapState, then declare it and its type like this:
  example!: string
  // Map auth using mapState above, then declare it inside this class
  auth!: RootState['auth']
  // Then
  currentUser = this.auth.currentUser
  // Or you can do this by hand:
  // get currentUser() {
  //   return (this.$store.state as RootState).auth.currentUser
  // }

  mounted() {
    this.$emit('randomBus')
    console.log(typeof this.example)
  }
}
