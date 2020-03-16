const initialState = {
  user: null,
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
        user: {}
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
      console.log('getting current user')

      return {
        ...state,
        status: (action.user ? 'LOGGED_IN' : 'LOGGED_OUT'),
        user: action.user
      }

    default:
      return state;
  }
}

export default auth
