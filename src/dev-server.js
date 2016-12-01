import config from '../config'
import express from 'express'
import proxy from 'express-http-proxy'
import webpack from 'webpack'
import webpackConfig from '../webpack.config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

const compiler = webpack(webpackConfig)
const app = express()
  .use(webpackDevMiddleware(compiler, {
    contentBase: config.paths.dist,
    headers: {'Access-Control-Allow-Origin': '*'},
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    inline: true,
    lazy: false,
    noInfo: true,
    quiet: false,
    port: config.DEV_PORT,
    publicPath: webpackConfig.output.publicPath,
    stats: {colors: true}
  }))
  .use(webpackHotMiddleware(compiler, {log: console.log}))
  .use(proxy(`http://localhost:${config.PORT}`))
  .listen(config.DEV_PORT, () => console.log(`HMR server on port ${config.DEV_PORT}`))

process.on('SIGTERM', () => app.close(() => process.exit(0)))
