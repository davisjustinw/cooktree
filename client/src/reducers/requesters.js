const initialState = {
  connections: [],
  requesting: true
}

function requesters(state = initialState, action) {
  switch(action.type) {
    case 'PENDING_REQUEST':
      return {
        ...state,
        requesting: true
      }
    case 'GET_CONNECTIONS':
      console.log('get_connections switch')
      console.log(action)
      const { connections } = action
      return {
        ...state,
        connections: connections,
        requesting: false
      }
    default:
      return state;
  }
}

export default requesters
