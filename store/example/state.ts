// VueX-Store state
const state = () => ({
  count: 0 as number
})
// Export default the state and Nuxt will help you regconize it
// in actions, mutations and getters in the same module without importing it
export default state
// But you have to import the RootState type
export type ExampleState = ReturnType<typeof state>
