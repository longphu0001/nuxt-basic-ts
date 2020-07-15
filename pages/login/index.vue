<template>
  <div class="container">
    <h1 class="text-purple">
      {{ $t('login.title') }}
    </h1>
    <div>
      <ValidationObserver v-slot="{ passes }">
        <b-form @submit.prevent="passes(postLogin)">
          <ValidationProvider v-slot="{ errors }" rules="required|email">
            <b-form-input
              v-model="form.email"
              class="mb-3"
              type="email"
              :placeholder="$t('login.email')"
            ></b-form-input>
            <div class="text-danger mb-3">{{ $t(errors[0]) }}</div>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" rules="required">
            <b-form-input
              v-model="form.password"
              class="mb-3"
              type="password"
              :placeholder="$t('login.password')"
            ></b-form-input>
            <div class="text-danger mb-3">{{ $t(errors[0]) }}</div>
          </ValidationProvider>
          <b-button variant="purple" type="submit">
            {{ $t('login.button') }}
          </b-button>
        </b-form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script lang="ts">
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Vue from 'vue'
export default Vue.extend({
  // Back to home if you've already been authenticated
  middleware: 'authNotRequired',
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async postLogin() {
      await this.$store.dispatch('login', this.form)
      this.$router.push('/')
    }
  }
})
</script>
