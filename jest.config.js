module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  coverageReporters: ['json', 'html', 'lcov'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js', '@testing-library/jest-dom/extend-expect'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  reporters: [
    'default',
    [
      './node_modules/jest-html-reporter',
      {
        pageTitle: 'Test Report',
        outputPath: './reports/test-report.html',
      },
    ],
  ],
  testRegex: 'tests/.*\\.test\\.js$',
  testResultsProcessor: 'jest-sonar-reporter',
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
