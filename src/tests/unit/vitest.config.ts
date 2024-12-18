import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  root: './src',
  test: {
    environment: 'happy-dom',
    include: [
      '**/*.spec.ts',
    ],
    restoreMocks: true,
  },
})
