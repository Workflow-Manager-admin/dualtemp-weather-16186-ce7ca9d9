module.exports = {
  preset: 'react-native',
  testMatch: ['**/*.test.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    // Use babel-jest for all JavaScript/TypeScript/React sources
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  // Only ignore unrelated node_modules: allow react-native, @react-native, react-clone-referenced-element, @react-navigation, metro, @react-native-community
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-clone-referenced-element|@react-navigation|metro|@react-native-community)/)'
  ]
};
