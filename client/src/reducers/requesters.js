const initialState = {
  submitSuccess: false,
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
    case 'CONNECTION_ADDED':
      //const { connection } = action
      console.log('add connection')

      return {
        ...state,
        //connections: [...state.connections, connection],
        submitSuccess: true
      }
    default:
      return state
  }
}

export default requesters
