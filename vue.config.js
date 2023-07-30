const path = require('path')
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "~@/assets/styles/common/variable.scss";
        `
      },
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
    .set('@', path.resolve(__dirname, 'src'));
    config.module
      .rule("eslint")
      .use("eslint-loader")
      .loader("eslint-loader")
      .tap((options) => ({
        ...options,
        fix: true,
        failOnWarning: false,
        failOnError: true,
        emitWarning: true,
      }));
  },
};
