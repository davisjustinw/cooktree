const initialState = {
  submitSuccess: false,
  connection_id: '',
  relation_id: '',
  name: '',
  avatar_url: '',
  relationship: ''
}

function connection(state = initialState, action) {
  switch(action.type) {
    case 'GET_CONNECTION':
      return {
        ...state,
      }
    case 'GET_CONNECTION_COMPLETE':

      return {
        ...state,
        connection_id: action.connection_id,
        relation_id: action.relation_id,
        name: action.name,
        avatar_url: action.avatar_url,
        relationship: action.relationship
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
