const precss = require('precss');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const autoreset = require('postcss-autoreset');

module.exports = {
    plugins: [
        precss(),
        autoprefixer(),
        pxtorem({
            rootValue: 75,
            unitPrecision: 7,
            propList: ['*']
        }),
        autoreset({
            reset: {
                margin: 0,
                padding: 0
            }
        })
    ]
}