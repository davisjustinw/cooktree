const initialState = {
  messages: []
}

function error(state = initialState, action) {
  switch(action.type){
    case 'UPDATE_ERRORS':
      return {
        ...state,
        messages: [...state.messages, action.error]
      }
    case 'CLEAR_ERRORS':
      return {
        ...state,
        messages: []
      }
    default:
      return state
  }
}

export default error
