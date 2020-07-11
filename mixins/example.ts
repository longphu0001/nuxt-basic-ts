import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      mixinMessage: 'Hello from mixin'
    }
  },
  methods: {
    sayHello(name: string) {
      // eslint-disable-next-line no-console
      console.log(`Hello ${name}, I'm printed from Vue-Mixin`)
    }
  }
})
