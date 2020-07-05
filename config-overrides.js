const { addBabelPlugin, override } = require("customize-cra");
const SriPlugin = require("webpack-subresource-integrity");
const cspHtmlWebpackPlugin = require("csp-html-webpack-plugin");

const cspConfigPolicy = {
  "default-src": "'none'",
  "base-uri": "'self'",
  "object-src": "'none'",
  "script-src": [
    "'self'",
    "https://*.googleapis.com",
    "https://www.googletagmanager.com",
    "https://tagmanager.google.com",
    "https://*.google-analytics.com",
  ],
  "style-src": [
    "'self'",
    "'unsafe-inline'",
    "https://*.googleapis.com",
    "https://tagmanager.google.com",
  ],
  "img-src": [
    "'self'",
    "data:",
    "https://www.googletagmanager.com",
    "https://*.gstatic.com",
    "https://*.google-analytics.com",
  ],
  "connect-src": [
    "'self'",
    "https://gateway-hio7rdwdxq-uc.a.run.app",
    "https://*.googleapis.com",
    "https://proxier.now.sh",
    "https://apps.correios.com.br",
    "https://viacep.com.br",
    "https://*.google-analytics.com",
  ],
  "font-src": ["'self'", "https://*.gstatic.com"],
  "frame-src": ["'self'", "https://*.google.com", "https://*.iubenda.com"],
  "form-action": [
    "'self'",
    "https://gateway-hio7rdwdxq-uc.a.run.app",
    "https://*.googleapis.com",
  ],
  "manifest-src": "'self'",
};

const cspConfigOptions = {
  enabled: true,
  hashingMethod: "sha384",
  hashEnabled: {
    "script-src": true,
    "style-src": true,
  },
  nonceEnabled: {
    "script-src": false,
    "style-src": false,
  },
};

function configWebpack(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }

  if (process.env.NODE_ENV === "production") {
    config.output.crossOriginLoading = "anonymous";
    config.plugins.push(
      new SriPlugin({
        hashFuncNames: ["sha384"],
      })
    );
    config.plugins.push(
      new cspHtmlWebpackPlugin(cspConfigPolicy, cspConfigOptions)
    );
  }
  return config;
}

module.exports = override(
  configWebpack,
  addBabelPlugin([
    "babel-plugin-root-import",
    {
      rootPathSuffix: "./src",
      rootPathPrefix: "~/",
    },
  ])
);
