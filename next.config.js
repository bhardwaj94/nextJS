const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withLess = require('@zeit/next-less');

// Update these to match your package scope name.
const internalNodeModulesRegExp = /@zeit(?!.*node_modules)/;
const externalNodeModulesRegExp = /node_modules(?!\/@zeit(?!.*node_modules))/;

module.exports = withCSS(withSass(withLess({
  onDemandEntries: {
    // on dev, since our pages are so expensive, lets keep them for 24 hours
    maxInactiveAge: 1000 * 60 * 60 * 24
  },
  publicRuntimeConfig: {
    RUNNER_URL: process.env.RUNNER_URL
  },

  webpack: (config, { defaultLoaders }) => {
    config.resolve.symlinks = false;

    config.externals = config.externals.map(external => {
      if (typeof external !== 'function') { return external; }

      return (ctx, req, cb) => (internalNodeModulesRegExp.test(req) ? cb() : external(ctx, req, cb));
    });

    config.module.rules.push({
      test: /\.+(js|jsx)$/,
      loader: defaultLoaders.babel,
      include: [internalNodeModulesRegExp]
    });

    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    });

    const originalEntry = config.entry;

    config.entry = async () => {
      const entries = await originalEntry();

      if (entries['main.js']) {
        entries['main.js'].unshift('./polyfills.js');
      }

      return entries;
    };

    return config;
  },

  webpackDevMiddleware: config => {
    const ignored = [config.watchOptions.ignored[0], externalNodeModulesRegExp];

    config.watchOptions.ignored = ignored;

    return config;
  },

  useFileSystemPublicRoutes: false
})));