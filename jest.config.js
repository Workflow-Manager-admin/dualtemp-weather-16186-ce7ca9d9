module.exports = {
  preset: 'react-native',
  testMatch: ['**/*.test.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    // Use babel-jest for all JavaScript/TypeScript/React sources
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  // Ensure all react-native, related and community modules are always transformed, for Flow/modern JS.
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native|@react-native-community|@react-navigation|metro|@testing-library|react|jest-react-native|react-test-renderer)/)"
  ]
};
