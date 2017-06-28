import { resolve } from "path";
import * as webpack from "webpack";
import { Request } from "express";

type Environment = "development" | "production";
const environment: Environment = process.env.NODE_ENV;

console.log(`Running webpack in ${environment} mode`);

let plugins: webpack.Plugin[] = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(environment),
    },
  }),
];

if (environment === "development") {
  plugins = [
    ...plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ];
}

if (environment === "production") {
  plugins = [
    ...plugins,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
      },
    }),
  ];
}

const config: webpack.Configuration = {
  entry: {
    app: ["react-hot-loader/patch", resolve(__dirname, "src", "index.tsx")],
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "build"),
    publicPath: "/",
  },
  devtool: "cheap-module-source-map",
  resolve: {
    modules: ["node_modules", resolve(__dirname, "src")],
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["react-hot-loader/webpack", "ts-loader"],
        include: resolve(__dirname, "src"),
      },
    ],
  },
  plugins,
  devServer: {
    host: "localhost",
    port: 3000,
    hot: true,
    inline: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    proxy: {
      "*": {
        target: "http://localhost:3001",
        bypass: (req: Request, res: Express.Response, proxyOptions: any) => {
          console.log(`Requested path to proxy: ${req.url}`);
          return false;
        },
      },
    },
    contentBase: false,
  },
};

module.exports = config;
