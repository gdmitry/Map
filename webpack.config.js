const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: {
        "react":"./client/app.js"
	},
    output: {
        path: path.resolve(__dirname, "build"), // string
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/",
                query: {
                    presets: ["es2015", "react"]
                }
            },
			{
				test: /\.less$/,           
				loader: "less-loader", // compiles Less to CSS           
				options: {
                    sourceMap: true
                }
       		}
        ]
    },
    plugins: [
        // new UglifyJSPlugin({
        //     compress: true,
        //     sourceMap: true
        // }),
        CopyWebpackPlugin([
            { from: "./client/index.html" }
        ])
    ],
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".json", ".jsx"]
    }
}