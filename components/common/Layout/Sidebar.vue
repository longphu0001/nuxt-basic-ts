<template>
  <b-container fluid>
    <p class="text-secondary my-1">
      {{ $t('home.sidebar') }}
    </p>
  </b-container>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Sidebar'
})
</script>
