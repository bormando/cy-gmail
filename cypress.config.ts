import {defineConfig} from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'https://subscriptions.cbc.ca',
    userAgent: 'Chrome/999.0.0.0',
    projectId: 'pgo4f1',
    watchForFileChanges: false,
    video: true,
  },
})
