import { PING, PONG } from './home.actions'

function homeReducers(state = {}, action) {
  if (!process.env || process.env.BABEL_ENV !== 'node') {
    console.log(state, action)
  }
  switch(action.type) {
    case PING:
      return {
        ...state,
        pingPong: 'Ping'
      }
    case PONG:
      return {
        ...state,
        pingPong: 'Pong'
      }
  }
  return state
}

export default homeReducers
