// https://github.com/zeit/next.js/blob/canary/examples/with-dotenv/next.config.js
require("dotenv").config();

const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ];

    return config;
  }
};
