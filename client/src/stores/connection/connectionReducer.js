const initialState = {
  submitSuccess: false,
  forbidden: false,
  list: [],
  current: {
    id: '',
    relation_id: '',
    name: '',
    email: '',
    avatarUrl: '',
    avatarFile: '',
    relationship: ''
  }
}

function connection(state = initialState, action) {
  const { type, current, connection, connections, change } = action

  switch(type) {
    case 'CLEAR_CONNECTION':
      return {
        ...state,
        submitSuccess: false,
        forbidden: false,
        current: {
          id: '',
          relation_id: '',
          name: '',
          email: '',
          avatarUrl: '',
          avatarFile: '',
          relationship: ''
        }
      }
    case 'GET_CONNECTIONS':
      return { ...state }
    case 'CONNECTION_FORBIDDEN':
      return {
        ...state,
        forbidden: true
      }
    case 'GET_CONNECTIONS_COMPLETE':
      return {
        ...state,
        list: connections
      }
    case 'GET_CONNECTION':
      return { ...state }

    case 'GET_CONNECTION_COMPLETE':
      return {
        ...state,
        current: {
          ...state.current,
          ...current
        }
      }
    case 'POST_CONNECTION':
      return { ...state }

    case 'POST_CONNECTION_COMPLETE':
      console.log('post connection complete')

      return {
        ...state,
        submitSuccess: true
      }
    case 'SUBMIT_SUCCESS':
      return {
        ...state,
        submitSuccess: false
      }
    case 'UPDATE_CONNECTION':
      console.log("in update connection")
      const newList = state.list.map(thisConnection => {
          if(thisConnection.id === connection.id){
            return connection
          } else {
            return thisConnection
          }
      })
      return {
        ...state,
        list: newList
      }

    case 'UPDATE_CONNECTION_VALUE':
      const { name, value } = change
      return {
        ...state,
        current: {
          ...state.current,
          [name]: value
        }
      }

    default:
      return state
  }
}

export default connection
