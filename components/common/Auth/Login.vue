<template>
  <b-modal id="sign-in-modal" title="Sign in to access the secret page">
    <FormWrapper @onSumit="postLogin">
      <InputWrapper rules="required|email">
        <!--  -->
        <b-form-input
          v-model="form.email"
          type="email"
          :placeholder="$t('login.email')"
        ></b-form-input>
      </InputWrapper>
      <InputWrapper rules="required">
        <b-form-input
          v-model="form.password"
          type="password"
          :placeholder="$t('login.password')"
        ></b-form-input>
      </InputWrapper>
      <b-button variant="purple" type="submit">
        {{ $t('login.button') }}
      </b-button>
    </FormWrapper>
    <template v-slot:modal-footer>
      <span></span>
    </template>
  </b-modal>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Action } from 'nuxt-property-decorator'
import { FormWrapper, InputWrapper } from '~/components/common'
import { ILogin } from '~/typings/auth/interfaces/login.interface'
@Component({
  components: {
    FormWrapper,
    InputWrapper
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
