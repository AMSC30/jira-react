const CracoLessPlugin = require('craco-less')

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': 'rgb(0,47,167)' },
                        javascriptEnabled: true
                    }
                }
            }
        }
    ]
}
