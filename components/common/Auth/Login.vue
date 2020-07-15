<template>
  <b-modal id="sign-in-modal" title="Sign in to access the secret page">
    <ValidationObserver v-slot="{ passes }">
      <b-form @submit.prevent="passes(postLogin)">
        <ValidationProvider v-slot="{ errors }" rules="required|email">
          <b-form-input
            v-model="form.email"
            class="mb-3"
            type="email"
            placeholder="Enter email"
          ></b-form-input>
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <b-form-input
            v-model="form.password"
            class="mb-3"
            type="password"
            placeholder="Enter password"
          ></b-form-input>
          <span>{{ errors[0] }}</span>
        </ValidationProvider>
        <b-button variant="purple" type="submit">
          login
        </b-button>
      </b-form>
    </ValidationObserver>
    <template v-slot:modal-footer>
      <span></span>
    </template>
  </b-modal>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Action } from 'nuxt-property-decorator'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { ILogin } from '~/typings/auth/interfaces/login.interface'
@Component({
  components: {
    ValidationObserver,
    ValidationProvider
  }
})
export default class LoginModal extends Vue {
  form: ILogin = {
    email: '',
    password: ''
  }

  @Action('login') login!: (credentials: ILogin) => void

  async postLogin() {
    await this.login(this.form)
    this.$root.$emit('bv::hide::modal', 'sign-in-modal', '#focusThisOnClose')
  }
}
</script>
