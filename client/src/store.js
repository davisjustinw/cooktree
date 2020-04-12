import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux'

import user from './stores/user/userReducer'
import connection from './stores/connection/connectionReducer'
import ui from './stores/ui/uiReducer'
import error from './stores/error/errorReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  user,
  connection,
  ui,
  error
})

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
)

export default store
