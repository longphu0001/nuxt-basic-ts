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
import { mapMutations, mapState } from 'vuex'
import { Login, Navbar, Footer } from '~/components/common'
export default Vue.extend({
  components: {
    // Login: () => import('~/components/common/Auth/Login.vue'),
    Login,
    Navbar,
    Footer
  },
  computed: {
    ...mapState({
      locale: 'locale'
    })
  },
  mounted() {
    // We store this configuration in localStorage because it lasts forever
    this.$i18n.locale = localStorage.getItem('locale') || this.locale
    this.SET_LANG(localStorage.getItem('locale')) // store in state and localStorage
  },
  methods: {
    ...mapMutations({
      SET_LANG: 'SET_LANG'
    })
  }
})
</script>
