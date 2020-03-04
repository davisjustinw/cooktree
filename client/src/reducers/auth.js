const initialState = {
  user: {
    email: ''
  },
  requesting: true
}

function auth(state = initialState, action) {
  switch (action.type) {
    case 'PENDING_REQUEST':
      console.log('pending request')
      return {
        ...state,
        requesting: true
      }

    case 'SUBMIT_LOGIN':
      return {
        ...state,
        requesting: false,
        user: {
          email: action.user
        }
      }

    case 'SUBMIT_LOGOUT':
      console.log('submitting logout')
      return {
        ...state,
        requesting: false,
        user: {
          email: ''
        }
      }

    case 'SUBMIT_SIGNUP':
      console.log('submitting signup')
      return {
        ...state,
        requesting: false,
        user: {
          email: ''
        }
      }

    case 'GET_CURRENT_USER':
      console.log('getting current user')
      return {
        ...state,
        requesting: false,
        user: {
          email: action.user
        }
      }

    default:
      return state;
  }
}

export default auth
