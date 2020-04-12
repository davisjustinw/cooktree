import { getHeader, url, postHeader } from '../helpers/fetchHelpers'

const getConnection = id => {
  return dispatch => {
    dispatch({ type: 'GET_CONNECTION'})
    fetch(`${url}/connections/${id}`, getHeader)
      .then(resp => resp.json())
      .then(connection => {
        console.log(connection)
        const { relation, relationship, id } = connection
        dispatch({
          type: 'GET_CONNECTION_COMPLETE',
          connection_id: id,
          relation_id: relation.id,
          name: relation.name,
          avatar_url: relation.avatar_url,
          relationship: relationship
        })
      })
  }
}

const postConnection = connection => {
  return dispatch => {
    dispatch({ type: 'POST_CONNECTION' })
    console.log(postHeader(connection))
    fetch(`${url}/connections`, postHeader(connection))
      .then(resp => resp.json())
      .then(json => {
        console.log('json response')
        console.log(json)
      })
      .catch((error) => {
        console.error('Fetch error', error)
      })
  }
}

export {
  postConnection,
  getConnection
}
