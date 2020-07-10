<template>
  <b-container fluid>
    <p class="text-secondary my-1">
      {{ $t('home.header') }}
    </p>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Header'
})
</script>
