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
    "node_modules/(?!(react-native"
      + "|@react-native"
      + "|@react-navigation"
      + "|@react-native-community"
      + "|react-clone-referenced-element"
      + "|react-navigation"
      + "|@unimodules"
      + "|expo(nent)?"
      + "|@expo(nent)?"
      + "|expo-router"
      + "|@expo/browser-polyfill"
      + "|(@babel|babel-runtime)"
      + "|@testing-library"
      + "|metro"
      + "|jest"
      + "|react-native-vector-icons"
      + "|pretty-format"
      + "|@storybook"
      + ")/)"
  ]
};
