const path= require("path");
const htmlWebpackPlugin= require("html-webpack-plugin");
const dotEnv = require("dotenv-webpack")

module.exports= {
    entry: {
        path: path.resolve(__dirname,"./src/index.js")
    },
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /\node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                test:/\.(png|jpg|jpeg|svg|gif)$/,
                use: [
                    {
                        loader: "file-loader"
                    }
                ]
            },
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new dotEnv()
    ],
    devServer: {
        historyApiFallback: {
            disableDotRule: true
        },
        liveReload: true
    }
}
