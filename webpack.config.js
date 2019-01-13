const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './js/script.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'script.js',

        // folder for including other types of files
        publicPath: '/build/'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: [
                    {
                        loader: "babel-loader",
                        options: { presets: ["@babel/preset-env"] }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader"
                ] 
              },
        ]
    }
}