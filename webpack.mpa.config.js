const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const env = process.env.NODE_ENV;

module.exports = {
  entry: {
    about: "./src/scripts/modules/about.js",
    auth: "./src/scripts/modules/auth.js",
    works: "./src/scripts/modules/works.js",
    blog: "./src/scripts/modules/blog.js" ,
    blur: "./src/scripts/modules/blur.js" ,
    slider: "./src/scripts/modules/slider.js" 
  },
  output: {
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_console: true
          }
        }
      })
    ]
  },
  resolve: {
    alias: {
      vue$:
        env === "development" ? "vue/dist/vue.esm.js" : "vue/dist/vue.min.js"
    }
  },
  devtool: env === "development" ? "#eval-source-map" : ""
};
