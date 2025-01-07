import path from "path";

const __dirname = new URL(".", import.meta.url).pathname;

export default {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "ReactCardFlipper",
    libraryTarget: "umd",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
