const initialState = {
  user: {
    email: '',
  },
  person: {
    name: '',
    avatar: ''
  },
  status: 'REQUESTING'
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
        user: action.user,
        person: action.person
      }

    case 'SUBMIT_LOGOUT':
      console.log('submitting logout')
      return {
        ...state,
        status: 'LOGGED_OUT',
        user: {
          email: '',
        },
        person: {
          name: '',
          avatar: ''
        },
      }

    case 'SUBMIT_SIGNUP':
      console.log('submitting signup')
      return {
        ...state,
        status: 'LOGGED_IN',
        user: action.user,
        person: action.person
      }

    case 'GET_CURRENT_USER':
      const { user, person } = action
      return {
        ...state,
        status: (user.email ? 'LOGGED_IN' : 'LOGGED_OUT'),
        user: user,
        person: person
      }

    default:
      return state;
  }
}

export default auth
