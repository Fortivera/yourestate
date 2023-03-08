// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
// }

// module.exports = nextConfig
const webpack = require("webpack");

module.exports = {
  webpack: (config) => {
    config.node = {
      fs: "empty",
    };

    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  },
}; 