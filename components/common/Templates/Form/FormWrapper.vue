<template>
  <ValidationObserver v-slot="{ passes }">
    <b-form @submit.prevent="passes(submitForm)">
      <slot></slot>
    </b-form>
  </ValidationObserver>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'
import { ValidationObserver } from 'vee-validate'
@Component({
  components: {
    ValidationObserver
  }
})
export default class FormWrapper extends Vue {
  submitForm() {
    this.$emit('onSubmit')
  }
}
</script>
