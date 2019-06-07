const { resolve } = require('path');
const withOffline = require("next-offline");
const withManifest = require("next-manifest");

const pipe = (...fns) => x => fns.reduce((val, f) => f(val), x);
const config = {
  target: "serverless",
  manifest: {
    name: "Todos",
    short_name: "Todos",
    icons: {
      src: resolve(process.cwd(), './assets/icon.png'),
      cache: true
  }
  },
  workboxOpts: {
    swDest: "static/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "NetworkFirst",
        options: {
          cacheName: "https-calls",
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
};

module.exports = pipe(
  withManifest,
  withOffline,
)(config);
