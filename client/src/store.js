import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux'

import auth from './reducers/auth'
import connections from './reducers/connections'
import controls from './reducers/controls'
import error from './reducers/error'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  auth,
  connections,
  controls,
  error
})

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
)

export default store
