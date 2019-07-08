const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 6060,
    publicPath: '/',
  },
  plugins: [new ErrorOverlayPlugin()],
};
