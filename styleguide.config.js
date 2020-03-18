const path = require('path');
const { version } = require('./package');

module.exports = {
    title: 'AVADO components',
    components: 'src/components/**/[A-Z]*.js',
    defaultExample: true,
    moduleAliases: {
        'rsg-example': path.resolve(__dirname, 'src'),
    },
    // ribbon: {
    // 	// url: 'https://github.com/styleguidist/react-styleguidist',
    // },
    version,
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader',
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                },
            ],
        },
    },
    require: [
        path.join(__dirname, './node_modules/bulma/bulma.sass'),
        path.join(__dirname, './src/sass/avado.sass'),
    ]
};
