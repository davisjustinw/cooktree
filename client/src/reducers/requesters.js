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
    case 'ADD_CONNECTION':
      const { connection } = action
      console.log('add connection')

      return {
        ...state,
        connections: [...state.connections, connection]
      }
    default:
      return state
  }
}

export default requesters
