module.exports = {
  preset: 'react-native',
  testMatch: ['**/*.test.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  // Transform all node_modules except those that are safe to ignore, and always transform react-native, @react-native
  // and also handle .js, .jsx, .ts, .tsx files for those packages
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@testing-library|@babel|metro|jest|expo|react-native-vector-icons)/)',
  ],
};
