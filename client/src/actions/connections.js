const getConnections = (id) => {
  return dispatch => {
    dispatch({ type: 'PENDING_REQUEST' })

    const headers = {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(`http://localhost:3001/connections/${id}`, headers)
      .then(resp => resp.json())
      .then(({connections}) => {
          dispatch({
            type: 'GET_CONNECTIONS',
            connections: connections
          })
        }
      )
      .catch(console.log)
  }
}
