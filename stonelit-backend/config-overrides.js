const path = require('path')

function resolve (dir) {
    return path.join(__dirname, '.', dir)
}

/* config-overrides.js */
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    // alias
    config.resolve.mainFiles = ['index', 'Index'];
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': resolve('src'),
        '@components': resolve('src/components'),
    };
    config.externals = {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'https://www.stonelit.cn'
        })
    }
    return config;
}
