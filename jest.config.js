module.exports = {
  preset: 'react-native',
  testMatch: ['**/*.test.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    // Use babel-jest for all JavaScript/TypeScript/React sources
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  // Broader pattern: transform all react, react-native, and related packages from node_modules
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react|react-native|@react-native|@react-navigation|metro|@react-native-community|@testing-library)/)'
  ]
};
