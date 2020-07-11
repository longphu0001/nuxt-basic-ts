import { Component, Vue } from 'nuxt-property-decorator'
import { mapState } from 'vuex'
import { RootState } from '~/store/state'
@Component({
  computed: {
    ...mapState({
      example: 'locale'
    })
    // other stuff
  }
})
export default class ExampleComponent extends Vue {
  // Your can get the state by mapState, then declare type like this:
  example!: string
  // Or you can do this by hand:
  get currentUser() {
    return (this.$store.state as RootState).auth.currentUser
  }

  mounted() {
    this.$emit('randomBus')
  }
}
