import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux'

import auth from './reducers/auth'
import controls from './reducers/controls'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  auth,
  controls
})

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
)

export default store
