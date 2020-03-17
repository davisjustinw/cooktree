const initialState = {
  user: {
    username: '',
    email: '',
    avatar: ''
  },
  status: 'REQUESTING',
  redirectToReferrer: false
}

function auth(state = initialState, action) {
  switch (action.type) {
    case 'PENDING_REQUEST':
      console.log('pending request')
      return {
        ...state,
        status: 'REQUESTING'
      }

    case 'SUBMIT_LOGIN':
      return {
        ...state,
        status: 'LOGGED_IN',
        redirectToReferrer: true,
        user: action.user
      }

    case 'SUBMIT_LOGOUT':
      console.log('submitting logout')
      return {
        ...state,
        status: 'LOGGED_OUT',
        redirectToReferrer: false,
        user: {
          username: '',
          email: '',
          avatar: ''
        }
      }

    case 'SUBMIT_SIGNUP':
      //might need work here
      console.log('submitting signup')
      return {
        ...state,
        status: 'LOGGED_IN',
        redirectToReferrer: true,
        user: action.user
      }

    case 'GET_CURRENT_USER':
      const { user } = action
      return {
        ...state,
        status: (user.username ? 'LOGGED_IN' : 'LOGGED_OUT'),
        user: user
      }

    default:
      return state;
  }
}

export default auth
