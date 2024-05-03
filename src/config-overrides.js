const path = require('path');

module.exports = function override(config, env) {
  // Добавляем фоллбэк для полифиллов
  config.resolve.fallback = {
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify/browser"),
    util: require.resolve("util/"),
    zlib: require.resolve("browserify-zlib"),
    stream: require.resolve("stream-browserify"),
    path: require.resolve("path-browserify"),
    querystring: require.resolve("querystring-es3"),
    buffer: require.resolve("buffer/"),
    url: require.resolve("url/"),
    crypto: require.resolve("crypto-browserify"),
    fs: false
  };

  return config;
};
