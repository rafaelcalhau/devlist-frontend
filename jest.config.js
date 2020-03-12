module.exports = {
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'components/**/*.{jsx,tsx}'
    // '**/*.{jsx,tsx}',
    // '!**/*.d.ts',
    // '!**/node_modules/**'
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js'
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  testMatch: [
    '**/*.(test|spec).(ts|tsx)'
  ],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: 'jest.tsconfig.json'
    }
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/'
  ],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  coverageReporters: [
    'json',
    'lcov',
    'text',
    'text-summary'
  ]
}
