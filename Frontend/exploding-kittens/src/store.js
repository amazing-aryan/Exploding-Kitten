import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import gameReducer from './reducers/gameReducer'
import leaderboardReducer from './reducers/leaderboardReducer'

const reducer = combineReducers({
    gameState: gameReducer,
    leaderboard: leaderboardReducer
  })
  
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
