<template>
  <ValidationProvider v-slot="{ errors }" :rules="rules">
    <slot></slot>
    <div class="text-danger mb-3">{{ $t(errors[0]) }}</div>
  </ValidationProvider>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'nuxt-property-decorator'
import { ValidationProvider } from 'vee-validate'
@Component({
  components: {
    ValidationProvider
  }
})
export default class InputWrapper extends Vue {
  @Prop({ default: '' })
  rules!: string
}
</script>
