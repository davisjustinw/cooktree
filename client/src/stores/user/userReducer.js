const initialState = {
  email: '',
  personId: '',
  name: '',
  avatar: '',
  status: 'LOGGING_IN'
}

function user(state = initialState, { type, user, person }) {
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
        email: user.email,
        personId: person.id,
        name: person.name,
        avatar: person.avatar
      }

    case 'SUBMIT_LOGOUT':
      return {
        ...state,
        status: 'LOGGED_OUT',
        email: '',
        personId: '',
        name: '',
        avatar: ''
      }

    case 'SUBMIT_SIGNUP':
      return {
        ...state,
        status: 'LOGGED_IN',
        email: user.email,
        personId: person.id,
        name: person.name,
        avatar: person.avatar
      }

    case 'GET_CURRENT_USER':
      return {
        ...state,
        status: (user.email ? 'LOGGED_IN' : 'LOGGED_OUT'),
        email: user.email,
        personId: person.id,
        name: person.name,
        avatar: person.avatar
      }

    default:
      return state;
  }
}

export default user
