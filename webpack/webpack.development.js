const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 6060,
    publicPath: '/',
    proxy: {

      '/api/**': {
        target: 'https://king-kong-ah-backend-staging.herokuapp.com/',
        secure: false,
        changeOrigin: true,
      }
    }
  },
  plugins: [new ErrorOverlayPlugin()],
};
