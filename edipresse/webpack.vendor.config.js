const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const Visualizer = require("webpack-visualizer-plugin");

const resolve = (dest) => path.resolve(__dirname, dest);

module.exports = {
  stats: "errors-only",
  entry: {
    vendors: [
      resolve("node_modules/vue/dist/vue.esm.js"),
      resolve("node_modules/vuex/dist/vuex.esm.js"),
      "axios"
    ],
    plugins: [
      resolve("node_modules/scrollmagic"),
      resolve("resources/assets/js/helpers/circles.js"),
      resolve("node_modules/tiny-slider/src/tiny-slider.module.js"),
      "macy",
      "vue-lazyload",
      "body-scroll-lock"
    ],
    animations: [resolve("node_modules/velocity-animate/velocity.js")]
  },
  output: {
    filename: "dist/js/[name].js",
    path: resolve("public"),
    library: "[name]_lib"
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: false,
        terserOptions: {
          ecma: undefined,
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: true,
          keep_classnames: undefined,
          keep_fnames: false,
          safari10: false
        }
      })
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".svg", ".scss"],
    modules: [
      resolve("node_modules"),
      resolve("resources/assets/js"),
      resolve("public/dist/js"),
      resolve("public/dist/dll")
    ]
  },
  module: {
    noParse: [/[\/\\]node_modules[\/\\]jsonld[\/\\]dist[\/\\]jsonld\.js$/],
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: false
          }
        }
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.modernizrrc\.js$/,
        loader: "webpack-modernizr-loader"
      }
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "public/dist/dll", "[name]-manifest.json"),
      name: "[name]_lib"
    }),
    new Visualizer({ filename: "./dist/visualizer/dll-statistics.html" })
  ]
};
