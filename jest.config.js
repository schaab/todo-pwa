const {jest: jestConfig} = require('kcd-scripts/config')

module.exports = Object.assign(jestConfig, {
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    setupFilesAfterEnv: [
        '@testing-library/react/cleanup-after-each',
        'jest-dom/extend-expect'
      ],
})