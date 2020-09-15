const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
   entry: path.join(__dirname, 'src', 'app.jsx'),
   output: {
	filename: 'bundle.js',
	path: path.resolve(__dirname),           
   },
   module: {
       rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
   },  plugins: [
    
    new HtmlWebpackPlugin({
      // injects bundle.js to our new index.html
      inject: true,
      // copys the content of the existing index.html to the new /build index.html
      template:  path.resolve('./index.html'),
    }),
  ],
   devtool: 'source-map',
   resolve: {
     extensions: ['.js','.jsx','*']
   },
};