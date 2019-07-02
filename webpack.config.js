
/* eslint-disable */
const webpackMerge = require('webpack-merge');
const commonWebpackConfig = require('./webpack/webpack.common');

module.exports = (env) => {
  let envConfiguration;
  !env.mode
    ? (envConfiguration = require('./webpack/webpack.development'))
    : (envConfiguration = require(`./webpack/webpack.${env.mode}`));

  return webpackMerge(
    { mode: env.mode },
    commonWebpackConfig,
    envConfiguration,
  );
};
