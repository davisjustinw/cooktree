import { getHeader, url } from './fetchHelpers'

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
    console.log('dispatch post connection')
    dispatch({ type: 'PENDING_REQUEST' })
    dispatch({
      type: 'ADD_CONNECTION',
      connection: connection
    })
  }
}

export {
  getConnections,
  postConnection
}
