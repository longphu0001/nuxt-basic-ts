<template>
  <div class="container">
    <h1 class="text-purple">
      {{ $t('login.title') }}
    </h1>
    <div>
      <FormWrapper @onSubmit="postLogin">
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
    </div>
  </div>
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
  },
  middleware: ['authNotRequired']
})
export default class LoginPage extends Vue {
  form: ILogin = {
    email: '',
    password: ''
  }

  @Action('login') login!: (credentials: ILogin) => void

  async postLogin() {
    await this.login(this.form)
    this.$router.push('/')
  }
}
</script>
