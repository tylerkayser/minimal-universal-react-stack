import config from './config'
import webpack from 'webpack'

export default {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    `webpack-hot-middleware/client?http://localhost:${config.DEV_PORT}/__webpack_hmr`,
    `${config.paths.src}/app.jsx`
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: config.paths.src,
        loaders: ['babel?cacheDirectory']
      },
      {
        test: /\.scss$/,
        include: config.paths.src,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  output: {
    filename: 'app.js',
    path: config.paths.dist,
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'BABEL_ENV': `'${process.env.BABEL_ENV}'`
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  sassLoader: {
    data: `$env: '${process.env.NODE_ENV}';`
  }
}
