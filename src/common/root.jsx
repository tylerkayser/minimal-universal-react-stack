import Navigation from './navigation'
import React from 'react'
import Routes from '../routes'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'

const Root = ({ store }) => (
  <Provider store={store}>
    {/*
      Todo - Implement react-router-redux@5.0
      https://github.com/reactjs/react-router-redux/pull/460
    */}
    <BrowserRouter>
      <div>
        <Navigation/>
        <Routes/>
      </div>
    </BrowserRouter>
  </Provider>
)

export default Root
