import studio from '@sanity/eslint-config-studio'

export default [
  ...studio,
  {
    settings: {
      react: {
        // Pin the version so eslint-plugin-react skips its auto-detect path,
        // which calls context.getFilename() (removed in ESLint v10).
        version: '19.2.4',
      },
    },
  },
]
