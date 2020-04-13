const initialState = {
  status: 'LOGGING_IN',
  id: '',
  name: '',
  email: '',
  avatar: ''
}

function user(state = initialState, { type, user }) {
  switch (type) {
    case 'PENDING_LOGIN':
      return {
        ...state,
        status: 'LOGGING_IN'
      }

    case 'SUBMIT_LOGIN':
      return {
        ...state,
        status: 'LOGGED_IN',
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar
      }

    case 'SUBMIT_LOGOUT':
      return {
        ...state,
        status: 'LOGGED_OUT',
        id: '',
        name: '',
        email: '',
        avatar: ''
      }

    case 'SUBMIT_SIGNUP':
      return {
        ...state,
        status: 'LOGGED_IN',
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar
      }

    case 'GET_CURRENT_USER':
      return {
        ...state,
        status: (user.email ? 'LOGGED_IN' : 'LOGGED_OUT'),
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar
      }

    default:
      return state;
  }
}

export default user
