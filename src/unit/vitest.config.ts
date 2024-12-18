import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'happy-dom',
    include: [
      'utils/**/*.spec.ts',
    ],
    restoreMocks: true,
  },
})
