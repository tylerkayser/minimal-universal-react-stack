# minimal-universal-react-stack

Minimal Universal [React](https://github.com/facebook/react) Stack with [Express](https://github.com/expressjs/express), [Redux](https://github.com/reactjs/redux), [React-Router v4](https://github.com/ReactTraining/react-router),  [Redux-Observable](https://github.com/redux-observable/redux-observable), HMR, [Babel](https://github.com/babel/babel), and [Webpack](https://github.com/webpack/webpack).


## Installation
Install the global npm dependencies

`yarn global add babel-cli webpack nodemon`


Install the npm dependencies

`yarn`


## Usage
Start the dev servers

`yarn start`

Navigate to `http://localhost:3000`, which is configurable.


## Hot Module Reload
HMR is manually configured to update React components, actions, epics, and reducers all in place.


## Future Work
* Fix CSS jank on server load
* React-Router v4 Redux integration
* Add progressive app offline support
* Clean up production deployment tasks
* Implement Webpack 2
