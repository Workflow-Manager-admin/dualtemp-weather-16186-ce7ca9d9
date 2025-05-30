module.exports = {
  preset: 'react-native',
  testMatch: ['**/*.test.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    // Use babel-jest for general JavaScript/TypeScript transformation
    '^.+\\.[jt]sx?$': 'babel-jest',
    // Specifically handle react-native source with metro-react-native-babel-transformer (sometimes needed for compatibility)
    '^.+/node_modules/react-native/.+\\.[jt]sx?$': 'metro-react-native-babel-transformer'
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
