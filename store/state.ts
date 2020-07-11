import { Auth } from '../core/interfaces/auth/auth.interface'
// VueX-Store state
const state = () => ({
  locales: ['en', 'vi'] as string[],
  locale: 'vi' as string,
  auth: {} as Auth
  // Get this with return (this.$store.state as RootState).locale
})
// Export default the state and Nuxt will help you regconize it
// in actions, mutations and getters in the same module without importing it
export default state
// But you have to import the RootState type
export type RootState = ReturnType<typeof state>
