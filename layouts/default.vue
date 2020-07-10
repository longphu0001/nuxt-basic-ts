<template>
  <b-container fluid class="p-0">
    <Navbar />
    <nuxt />
    <Login />
    <Footer />
  </b-container>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  components: {
    Login: () => import('~/components/common/Auth/Login.vue'),
    Navbar: () => import('~/components/common/Layout/Navbar.vue'),
    Footer: () => import('~/components/common/Layout/Footer.vue')
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
}
</script>
