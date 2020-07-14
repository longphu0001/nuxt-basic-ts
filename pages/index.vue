<template>
  <b-container fluid>
    <Example @randomBus="catchFromBus" />
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
    <b-button variant="primary" @click="inc">
      Vuex module example {{ count }}
    </b-button>
  </b-container>
</template>
<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import { namespace } from 'vuex-class'
import { MutationsEnum } from '~/typings/store/example/enum/mutations.enum'
import { Example } from '~/components/specifics/Home'
import Mixins from '~/mixins/example'
const ExampleModule = namespace('example')
@Component({
  components: {
    Example
  }
})
export default class PageIndex extends mixins(Mixins) {
  @ExampleModule.Mutation(MutationsEnum.INCREASE_COUNT) inc!: () => void
  @ExampleModule.State('count') count!: number
  // Event bus example
  catchFromBus() {
    // eslint-disable-next-line no-console
    console.log('Bus caught!')
  }

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
