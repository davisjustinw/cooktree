const initialState = {
  submitSuccess: false,
  list: [],
  current: ''
}

function connection(state = initialState, action) {
  switch(action.type) {
    case 'GET_CONNECTIONS':
      return {
        ...state,
      }
    case 'GET_CONNECTIONS_COMPLETE':
      const { connections } = action
      return {
        ...state,
        list: connections
      }
    case 'GET_CONNECTION':
      return {
        ...state,
      }
    case 'GET_CONNECTION_COMPLETE':
      return {
        ...state,
        current: action.current
      }
    case 'POST_CONNECTION':
      return {
        ...state,
      }
    case 'POST_CONNECTION_COMPLETE':
      console.log('post connection complete')

      return {
        ...state,
        submitSuccess: true
      }
    default:
      return state
  }
}

export default connection
