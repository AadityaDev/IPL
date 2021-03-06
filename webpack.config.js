const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader?name=img/[name].[ext]?[hash]',
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader',
        ],
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader',
        ],
      },
      {
        test: /\.vue$/,
        include: /src/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'awesome-typescript-loader?silent=true',
          },
        },
      },
      {
        test: /\.(csv|xlsx|xls)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/csv/[name].[ext]',
        },
      },
    ],
  },
};
