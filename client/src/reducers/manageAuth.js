export default function manageAuth(
  state = {
    user: {
      email: ''
    },
    requesting: false
  },
  action
) {
  switch (action.type) {
    case 'PENDING_REQUEST':
      return {
        ...state,
        requesting: true
      }

    case 'SUBMIT_LOGIN':
      return {
        ...state,
        user: {
          email: action.user
        },
        requesting: false
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
        state,
        requesting: false,
        user: {
          email: action.user
        }
      }

    default:
      return state;
  }
}
