const withOffline = require("next-offline");
const withManifest = require("next-manifest");

const pipe = (...fns) => x => fns.reduce((val, f) => f(val), x);
const config = {
  target: "serverless",
  manifest: {
    name: "Todos",
    short_name: "Todos",
    icons: [
      {
        src: "/static/icons/todos-128.png",
        sizes: "128x128",
        type: "image/png"
      },
      {
        src: "/static/icons/todos-144.png",
        sizes: "144x144",
        type: "image/png"
      },
      {
        src: "/static/icons/todos-152.png",
        sizes: "152x152",
        type: "image/png"
      },
      {
        src: "/static/icons/todos-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/static/icons/todos-256.png",
        sizes: "256x256",
        type: "image/png"
      },
      {
        src: "/static/icons/todos-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    start_url: "/",
    display: "standalone",
    background_color: "white",
    theme_color: "#c900ff"
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
  withOffline,
  withManifest
)(config);
