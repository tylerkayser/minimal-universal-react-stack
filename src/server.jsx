import config from '../config'
import express from 'express'
import fs from 'fs'
import React from 'react'
import reducers from './reducers'
import Root from './common/root.server'

import { AppContainer } from 'react-hot-loader'
import { createServerRenderContext } from 'react-router'
import { createStore } from 'redux'
import { renderToString } from 'react-dom/server'

const app = express()
  .use('/', express.static(config.paths.dist))
  .use(handleRender)
  .listen(config.PORT, () => console.log(`Listening on port ${config.PORT}`))

process.on('SIGTERM', () => app.close(() => process.exit(0)))

function handleRender(request, response) {
  const store = createStore(reducers)
  const context = createServerRenderContext()

  response.send(renderFullPage(
    renderToString(
      <AppContainer>
        <Root
            context={context}
            location={request.url}
            store={store}/>
      </AppContainer>,
    ),
    store.getState()
  ))
}

function renderFullPage(html, preloadedState) {
  return fs.readFileSync(config.paths.src + '/index.html', 'utf8')
    .replace('${preloadedState}', JSON.stringify(preloadedState))
    .replace('${html}', html)
}
