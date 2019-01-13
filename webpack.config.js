const path = require('path');

module.exports = {
    entry: './js/script.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'script.js',

        // folder for including other types of files
        publicPath: '/build/'
    },
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
            }
        ]
    }
}