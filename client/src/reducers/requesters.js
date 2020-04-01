const initialState = {
  connections: []
}

function requesters(state = initialState, action) {
  switch(action.type) {
    case 'PENDING_REQUEST':
      return {
        ...state,
      }
    case 'GET_CONNECTIONS':
      const { connections } = action
      return {
        ...state,
        connections: connections,
      }
    case 'POST_CONNECTION':
      const { connection } = action
      console.log('push connection')
      console.log(connection)
      return state
    default:
      return state
  }
}

export default requesters
