// next.config.js
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(withSass({
  cssModules: true,
  parser: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
  },
  config: {
    ctx: {
      theme: JSON.stringify(process.env.REACT_APP_THEME)
    }
  },
  devIndicators: {
    autoPrerender: true,
  },

  webpack(config, options) {
    config.module.rules.push(
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      },

    );
    return config;
  }
}));
