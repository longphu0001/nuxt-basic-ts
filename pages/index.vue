<template>
  <b-container fluid>
    <ExampleComponent />
    <p class="random-class">
      {{ $t('random-text') | slugify }}
    </p>
    <p class="mt-5">
      {{ $t('random-text-using-grid') }}
      <span class="sx-10"></span>
      {{ $t('random-text-using-spacing') }}
    </p>
    <p class="random-text-using-mixin">
      {{ $t('random-text-using-mixin') }}
    </p>
  </b-container>
</template>
<script lang="ts">
import { Component } from 'nuxt-property-decorator'
import { mixins } from 'vue-class-component'
import Mixins from '~/mixins/example'
@Component({
  components: {
    ExampleComponent: () =>
      import('~/components/specifics/Home/ExampleComponent.vue')
  }
})
export default class PageIndex extends mixins(Mixins) {
  created() {
    // Function and variable from mixins
    this.sayHello('Rim')
  }

  head() {
    return {
      title: 'Home page',
      description: 'A short dummy description'
    }
  }
}
</script>
<style lang="scss">
.random-class {
  color: $purple;
}
.random-text-using-mixin {
  @include centerAbsolute('both');
}
</style>
