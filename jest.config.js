module.exports = {
  preset: 'react-native',
  testMatch: ['**/*.test.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    // Use babel-jest for all JavaScript/TypeScript/React sources
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  // Aggressively whitelist: transform *all* react-native, @react-native, and other modern/ESM packages
  transformIgnorePatterns: [
    '/node_modules/(?!(react-native' +
      '|@react-native' +
      '|@testing-library' +
      '|@babel' +
      '|metro' +
      '|jest' +
      '|expo' +
      '|react-native-vector-icons' +
      '|react-clone-referenced-element' +
      '|react-navigation' +
      '|pretty-format' +
      '|@expo' +
      '|@storybook' +
      ')/)'
  ]
};
