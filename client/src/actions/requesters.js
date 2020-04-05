import { getHeader, url, postHeader } from './fetchHelpers'

const getConnections = (id) => {
  return dispatch => {
    dispatch({ type: 'PENDING_REQUEST'})
    fetch(`${url}/connections?person_id=${id}`, getHeader)
      .then(resp => resp.json())
      .then(connections => {
          dispatch({
            type: 'GET_CONNECTIONS',
            connections: connections
          })
        }
      )
      .catch(console.log)
  }
}

const postConnection = connection => {
  return dispatch => {
    dispatch({ type: 'PENDING_REQUEST' })
    fetch(`${url}/connections`, postHeader(connection))
      .then(resp => resp.json())
      .then(json => {
        catch_errors_dispatch_connections(json, dispatch)
      })
      .catch((error) => {
        console.error('Fetch error', error)
      })
  }
}

const catch_errors_dispatch_connections = ({ connection, person, error, validation_errors }, dispatch) => {
    if(connection){
      console.log('connection')
      dispatch({ type: 'CLEAR_ERRORS' })
      dispatch({
        type: 'ADD_CONNECTION',
        connection: connection
      })
    } else if (error) {
      dispatch({
        type: 'UPDATE_ERRORS',
        error: error
      })
    } else if (validation_errors) {
      console.log('validation_errors')
      dispatch({
        type: 'UPDATE_VALIDATION_ERRORS',
        validation_errors: validation_errors
      })
    }
}

export {
  getConnections,
  postConnection
}
