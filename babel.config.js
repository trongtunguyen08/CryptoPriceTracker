module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // expo r -c
    plugins: ['react-native-reanimated/plugin'],
  };
};
