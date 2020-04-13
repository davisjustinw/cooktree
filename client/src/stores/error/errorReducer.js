const initialState = {
  messages: [],
  validation_errors: {
    user: '',
    connection: '',
  }
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
        messages: [],
        validation_errors: {
          user: '',
          connection: ''
        }
      }
    case 'UPDATE_VALIDATION_ERRORS':
      return {
        ...state,
        validation_errors: action.validation_errors
      }
    case 'CLEAR_VALIDATION_ERRORS':
      return {
        ...state,
        validation_errors: {}
      }
    default:
      return state
  }
}

export default error
