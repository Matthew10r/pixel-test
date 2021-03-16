// craco.config.js
const path = require('path');
const cracoAlias = require('craco-alias');
const CracoAntDesignPlugin = require('craco-antd');
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
    },
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: { localIdentName: '[local]_[hash:base64:5]' },
        },
        modifyLessRule(lessRule, _context) {
          const _lessRule = lessRule;
          _lessRule.test = /\.(module)\.(less)$/;
          _lessRule.exclude = path.join(__dirname, 'node_modules');
          return _lessRule;
        },
      },
    },
    {
      plugin: cracoAlias,
      options: {
        source: 'tsconfig',
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: '.',
        /* tsConfigPath should point to the file where "baseUrl" and "paths" 
          are specified */
        tsConfigPath: './tsconfig.path.json',
      },
    },
  ],
};
