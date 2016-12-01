import configureStore from './store'
import DevTools from './common/dev-tools'
import React from 'react'
import Root from './common/root'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'

const devTools = document.getElementById('dev-tools')
const store = configureStore()
const root = document.getElementById('root')

render(
  <AppContainer>
    <Root store={store}/>
  </AppContainer>,
  root
)

render(
  <DevTools store={store}/>,
  devTools
)

if (module.hot) {
  module.hot.accept('./common/root', () => {
    const NextRoot = require('./common/root').default
    render(
      <AppContainer>
        <NextRoot store={store}/>
      </AppContainer>,
      root
    )
  })
}
