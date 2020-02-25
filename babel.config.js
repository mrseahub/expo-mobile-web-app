module.exports = function(api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "$common": "./src/common",
            "$common/*": "./src/common/*"
          }
        }
      ]
    ]
  };
};
