const path = require("path");
const glob = require("glob-all"); // Required for PurgecssPlugin
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WebpackCleanPlugin = require("webpack-clean");
const TerserPlugin = require("terser-webpack-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const Visualizer = require("webpack-visualizer-plugin");
//const WorkboxPlugin = require('workbox-webpack-plugin');

const resolve = (dest) => path.resolve(__dirname, dest);
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlBeautifyPlugin = require("html-beautify-webpack-plugin");
const fs = require("fs");

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map((item) => {
    const parts = item.split(".");
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `dist/html/${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: false,
      cashe: true
    });
  });
}

const htmlPlugins = generateHtmlPlugins("./resources/assets/html/pages");
const isProd = process.argv.indexOf("--watch") === -1;
const isDevServ = process.argv.indexOf("--open") === -1;

module.exports = {
  devtool: isProd ? "" : "cheap-module-eval-source-map",
  stats: "errors-only",
  entry: {
    scripts: ["@babel/polyfill", resolve("resources/assets/js/scripts.js")],
    styles: [resolve("resources/assets/sass/styles.scss")]
  },
  output: {
    filename: "dist/js/[name].js",
    library: "[name]",
    path: resolve("public")
  },
  devServer: {
    contentBase: resolve("public"),
    compress: true,
    inline: true,
    hot: true,
    port: 9000,
    stats: "errors-only",
    index: "index.html",
    openPage: "dist/html/index.html"
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
    extensions: [".js", ".jsx", ".vue", ".json", ".svg", ".scss"],
    modules: [
      resolve("node_modules"),
      resolve("resources/assets/js"),
      resolve("public/dist/js"),
      resolve("public/dist/dll")
    ],
    alias: {
      img: resolve("resources/assets/images"),
      js: resolve("resources/assets/js"),
      svg: resolve("resources/assets/svg"),
      fonts: resolve("resources/assets/fonts"),
      html_common: resolve("resources/assets/html/common"),
      html_components: resolve("resources/assets/html/components"),
      fontawesome_brands: resolve(
        "node_modules/@fortawesome/free-brands-svg-icons"
      ),
      fontawesome_solid: resolve(
        "node_modules/@fortawesome/free-solid-svg-icons"
      )
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Vue: [resolve("node_modules/vue/dist/vue.esm.js"), "default"],
      Vuex: [resolve("node_modules/vuex/dist/vuex.esm.js"), "default"],
      Store: [resolve("node_modules/vuex/dist/vuex.esm.js"), "Store"],
      install: [resolve("node_modules/vuex/dist/vuex.esm.js"), "install"],
      mapState: [resolve("node_modules/vuex/dist/vuex.esm.js"), "mapState"],
      mapMutations: [
        resolve("node_modules/vuex/dist/vuex.esm.js"),
        "mapMutations"
      ],
      mapGetters: [resolve("node_modules/vuex/dist/vuex.esm.js"), "mapGetters"],
      mapActions: [resolve("node_modules/vuex/dist/vuex.esm.js"), "mapActions"],
      createNamespacedHelpers: [
        resolve("node_modules/vuex/dist/vuex.esm.js"),
        "createNamespacedHelpers"
      ],
      axios: "axios",
      fontawesome: "@fortawesome/fontawesome",
      Cookies: resolve("node_modules/js-cookie/src/js.cookie.js"),
      Modernizr: resolve("resources/assets/js/helpers/.modernizrrc.js"),
      ScrollMagic: "scrollmagic",
      Circles: resolve("resources/assets/js/helpers/circles.js"),
      Velocity: resolve("node_modules/velocity-animate/velocity.js"),
      Macy: "macy",
      VueLazyload: "vue-lazyload",
      disableBodyScroll: [
        resolve("node_modules/body-scroll-lock/lib/bodyScrollLock.es6.js"),
        "disableBodyScroll"
      ],
      bodyScrollLock: "body-scroll-lock",
      tns: [
        resolve("node_modules/tiny-slider/src/tiny-slider.module.js"),
        "tns"
      ]
    }),
    new VueLoaderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin("dist/css/[name].css"),
    new PurgecssPlugin({
      // Remove unused CSS using purgecss. See https://github.com/FullHuman/purgecss
      paths: glob.sync([
        resolve("resources/assets/html/**/*.html"),
        resolve("resources/assets/js/**/*.vue"),
        resolve("resources/assets/js/**/*.js")
      ]),
      whitelist: ["html", "body"],
      whitelistPatterns: [/^level-/, /^tns-/]
    }),
    new CleanWebpackPlugin(
      [
        resolve("public/dist/css"),
        resolve("public/dist/workbox-assets"),
        resolve("public/dist/html"),
        resolve("public/service-worker.js")
      ],
      {
        exclude: [
          resolve("public/dist/js"),
          resolve("public/dist/dll"),
          resolve("public/dist/visualizer")
        ]
      }
    ),
    new CopyWebpackPlugin([
      {
        from: resolve("resources/assets/svg/*.svg"),
        to: resolve("public/dist/images/[ext]/[name].[ext]")
      },
      {
        from: resolve("resources/assets/svg/inline/*.svg"),
        to: resolve("public/dist/images/[ext]/inline/[name].[ext]")
      },
      {
        from: resolve("resources/assets/svg/brands/menu/*.svg"),
        to: resolve("public/dist/images/brands/menu/[name].[ext]")
      },
      {
        from: resolve("resources/assets/images/**/*.png"),
        to: resolve("public/dist/images/[name].[ext]")
      },
      {
        from: resolve("resources/assets/icons/*.png"),
        to: resolve("public/dist/icons/[name].[ext]")
      },
      {
        from: resolve("resources/assets/images/**/*.jpg"),
        to: resolve("public/dist/images/[name].[ext]")
      },
      {
        from: resolve("resources/assets/data/**/*.json"),
        to: resolve("public/dist/data/[name].[ext]")
      }
    ]),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require("./public/dist/dll/vendors-manifest.json")
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require("./public/dist/dll/plugins-manifest.json")
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require("./public/dist/dll/animations-manifest.json")
    }),
    new WebpackCleanPlugin(["public/dist/js/styles.js"]),
    new Visualizer({ filename: "./dist/visualizer/statistics.html" })
  ].concat(htmlPlugins),
  module: {
    noParse: /\/jquery|lodash\//,
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "vue-loader",
            options: {}
          },
          {
            loader: "vue-svg-inline-loader",
            options: {}
          }
        ]
      },
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
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: !isProd
              }
            },
            {
              loader: "px-rem"
            },
            {
              loader: "postcss-loader",
              options: {
                sourceMap: !isProd,
                ident: "postcss",
                plugins: () => [require("autoprefixer")(), require("cssnano")()]
              }
            },
            /*{
                loader: 'resolve-url-loader',
                options: {
                    root: path.join(__dirname, 'assets/store')
                }
            },*/
            {
              loader: "sass-loader",
              options: {
                sourceMap: !isProd,
                outputStyle: isProd ? "compressed" : "expanded", //nested, expanded, compact, compressed
                precision: 6
              }
            }
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
              publicPath: "../",
              outputPath: "dist"
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]",
          publicPath: "../",
          outputPath: "dist"
        }
      },
      {
        test: /\.ico$/,
        loader: "file-loader",
        options: {
          name: "ico/[name].[ext]"
        }
      },
      {
        test: /\.html$/,
        include: [
          path.resolve(__dirname, "resources/assets/html/common"),
          path.resolve(__dirname, "resources/assets/html/components")
        ],
        loader: "html-loader",
        options: {
          interpolate: true,
          attrs: ["img:src", "img:srcset", "source:srcset"]
        }
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.svg$/,
        include: [path.resolve(__dirname, "resources/assets/svg/inline")],
        loader: "svg-inline-loader"
      },
      {
        test: /\.svg$/,
        exclude: [path.resolve(__dirname, "resources/assets/svg/inline")],
        loader: "url-loader"
      }
    ]
  }
};

module.exports.plugins = (module.exports.plugins || []).concat([
  new HtmlBeautifyPlugin({
    config: {
      html: {
        // https://github.com/beautify-web/js-beautify
        indent_size: 2,
        indent_char: " ",
        indent_with_tabs: false,
        eol: "\\n",
        end_with_newline: true,
        preserve_newlines: true,
        max_preserve_newlines: 0,
        indent_inner_html: false,
        brace_style: "collapse",
        indent_scripts: "normal", //[keep|separate|normal]
        wrap_attributes: "auto", //[auto|force|force-aligned|force-expand-multiline|aligned-multiple]
        inline: ["i", "b", "span", "a", "br"],
        unformatted: [],
        extra_liners: ["body", "head", "html", "/html"]
      }
    }
  })
]);
