<template>
  <b-container fluid class="p-0">
    <Navbar />
    <nuxt />
    <Login />
    <Footer />
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'
import { State, Mutation } from 'vuex-class'
import { RootMutations } from '~/typings/store/root/enum/mutations.enum'
import { Login, Navbar, Footer } from '~/components/common'
@Component({
  components: {
    Login,
    Navbar,
    Footer
  }
})
export default class DefaultLayout extends Vue {
  @State('locale') locale!: string
  // Mutation mapping with type check for payload:
  @Mutation(RootMutations.SET_LANG) SET_LANG!: (key: string) => void
  mounted() {
    const localLocale: string = localStorage.getItem('locale') + ''
    // We store this configuration in localStorage because it lasts forever
    this.$i18n.locale = localLocale || this.locale
    this.SET_LANG(localLocale) // store in state and localStorage
  }
}
</script>
