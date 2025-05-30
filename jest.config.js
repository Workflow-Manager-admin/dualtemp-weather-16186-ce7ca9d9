module.exports = {
  preset: 'react-native',
  testMatch: ['**/*.test.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
  },
  // Broadened to avoid ignoring any react-native, @react-native, and selected modern packages—let Babel transform them
  transformIgnorePatterns: [
    '/node_modules/(?!(react-native' +
      '|@react-native' +
      '|@testing-library' +
      '|@babel' +
      '|metro' +
      '|jest' +
      '|expo' +
      '|react-native-vector-icons' +
      '|react-clone-referenced-element' + // often needed
      '|react-navigation' +
      '|pretty-format' +
      ')/)'
  ],
};
