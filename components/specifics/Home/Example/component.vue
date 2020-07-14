<template>
  <p class="my-1 example-component">{{ $t('home.introduction') }}</p>
</template>
<script lang="ts">
// Use src="" causes "is not a module error"
import component from './script'
export default component
</script>
<style lang="scss" scoped>
@import './style';
</style>
