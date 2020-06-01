const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const path = require("path");
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [require.resolve("babel-preset-react-app")],
    },
  });
  config.resolve.plugins = config.resolve.plugins || [];

  config.resolve.plugins.push(
    new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, "../tsconfig.json"),
    })
  );

  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
