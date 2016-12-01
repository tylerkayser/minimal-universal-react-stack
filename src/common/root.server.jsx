import Navigation from './navigation'
import React from 'react'
import Routes from '../routes'
import { Provider } from 'react-redux'
import { ServerRouter } from 'react-router'

const Root = ({ store, context, location }) => (
  <Provider store={store}>
    {/*
      Todo - Implement react-router-redux@5.0
      https://github.com/reactjs/react-router-redux/pull/460
    */}
    <ServerRouter
        context={context}
        location={location}>
      <div>
        <Navigation/>
        <Routes/>
      </div>
    </ServerRouter>
  </Provider>
)

export default Root
