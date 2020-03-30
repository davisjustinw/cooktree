const initialState = {
  user: {
    email: '',
  },
  person: {
    id: '',
    name: '',
    avatar: ''
  },
  status: 'LOGGING_IN'
}

function auth(state = initialState, action) {
  switch (action.type) {
    case 'PENDING_LOGIN':
      return {
        ...state,
        status: 'LOGGING_IN'
      }

    case 'SUBMIT_LOGIN':
      return {
        ...state,
        status: 'LOGGED_IN',
        user: action.user,
        person: action.person
      }

    case 'SUBMIT_LOGOUT':
      return {
        ...state,
        status: 'LOGGED_OUT',
        user: {
          email: '',
        },
        person: {
          id: '',
          name: '',
          avatar: ''
        },
      }

    case 'SUBMIT_SIGNUP':
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
