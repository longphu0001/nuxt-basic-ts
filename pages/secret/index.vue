<template>
  <div>
    <h1 class="m-3 text-purple">
      {{ $t('secret-text') }}
    </h1>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  middleware: 'authRequired'
})
</script>
