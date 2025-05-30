module.exports = {
  preset: 'react-native',
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@testing-library)/)'
  ],
};
