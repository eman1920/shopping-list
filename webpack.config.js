var path = require("path"); //to get the current directory plus other things

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

module.exports = { //export all these settings for webpack
    entry: SRC_DIR + "/app/index.js", //the entery point:the root js file
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [{
                test: /\.js$/, //to work in Js files
                include: SRC_DIR, //in this directory
                use: {
                    loader: "babel-loader"
                }
                // query: {
                //     presets: ["react", "es2015"] //which codes to be converted to vanilla js
                // }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};