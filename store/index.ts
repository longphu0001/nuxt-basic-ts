// VueX-Store state
export const state = () => ({
  locales: ['en', 'vi'] as string[],
  locale: 'vi' as string,
  auth: null as any
  // Get this with return (this.$store.state as RootState).locale
})

export type RootState = ReturnType<typeof state>

// vuex-module-decorators is coming soon
