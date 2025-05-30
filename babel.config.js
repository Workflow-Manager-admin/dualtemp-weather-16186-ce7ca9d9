module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-typescript',
    '@babel/preset-flow',
  ],
  plugins: [
    'babel-plugin-transform-flow-enums',
  ],
};
