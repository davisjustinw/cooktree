import { getHeader, url, postHeader } from '../helpers/fetchHelpers'

const clearConnection = () => {
  return dispatch => {
    dispatch({ type: 'CLEAR_CONNECTION' })
  }
}

const getConnection = id => {
  return dispatch => {
    dispatch({ type: 'GET_CONNECTION'})
    fetch(`${url}/connections/${id}`, getHeader)
      .then(resp => resp.json())
      .then(connection => {
        if(connection.error){
          dispatch({ type: 'CONNECTION_FORBIDDEN' })
        } else {
          dispatch({
            type: 'GET_CONNECTION_COMPLETE',
            current: {
              connection_id: connection.id,
              relation_id: connection.relation.id,
              name: connection.relation.name,
              avatarUrl: connection.relation.avatarUrl,
              relationship: connection.relationship
            }
          })
          dispatch({
            type: 'GET_RECIPE_LIST_COMPLETE',
            recipes: connection.relation_recipes
          })
        }

      })
  }
}

const getConnections = id => {
  return dispatch => {
    dispatch({ type: 'GET_CONNECTIONS'})

    fetch(`${url}/connections?id=${id}`, getHeader)
      .then(resp => resp.json())
      .then(connections => {
          dispatch({
            type: 'GET_CONNECTIONS_COMPLETE',
            connections: connections
          })
        }
      )
      .catch(console.log)
  }
}

const postConnection = connection => {
  return dispatch => {
    dispatch({ type: 'POST_CONNECTION' })
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

const catch_errors_dispatch_connections = (json, dispatch) => {
    const { id, error, validation_errors } = json
    if(id){
      dispatch({ type: 'CLEAR_ERRORS' })
      dispatch({
        type: 'POST_CONNECTION_COMPLETE'
      })
    } else if (error) {
      dispatch({
        type: 'UPDATE_ERRORS',
        error: error
      })
    } else if (validation_errors) {
      dispatch({
        type: 'UPDATE_VALIDATION_ERRORS',
        validation_errors: validation_errors
      })
    }
}

const resetSuccess = () => {
  return dispatch => {
    dispatch({ type: 'SUBMIT_SUCCESS' })
  }
}

const updateConnection = connection => {
  return dispatch => {
    dispatch({ type: 'UPDATE_CONNECTION', connection: connection })
  }
}

const handleConnectionChange = change => {
  return dispatch => {
    dispatch({ type: 'UPDATE_CONNECTION_VALUE', change: change })
  }
}

export {
  clearConnection,
  getConnections,
  postConnection,
  getConnection,
  resetSuccess,
  updateConnection,
  handleConnectionChange
}
