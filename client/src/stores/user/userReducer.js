import { url } from '../helpers/fetchHelpers'

const initialState = {
  status: 'LOGGING_IN',
  id: '',
  name: '',
  email: '',
  avatar_url: '',
  password: ''
}

function user(state = initialState, { type, user, change }) {
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
        avatar_url: `${url}${user.avatar_url}`
      }

    case 'SUBMIT_LOGOUT':
      return {
        ...state,
        status: 'LOGGED_OUT',
        id: '',
        name: '',
        email: '',
        avatar_url: '',
        password: ''
      }

    case 'SUBMIT_SIGNUP':
      return {
        ...state,
        status: 'LOGGED_IN',
        id: user.id,
        name: user.name,
        email: user.email,
        avatar_url: `${url}${user.avatar_url}`
      }

    case 'GET_CURRENT_USER':
      return {
        ...state,
        status: (user.email ? 'LOGGED_IN' : 'LOGGED_OUT'),
        id: user.id,
        name: user.name,
        email: user.email,
        avatar_url: `${url}${user.avatar_url}`
      }

    case 'GET_TOKEN_USER':
      return { ...state }

    case 'GET_TOKEN_USER_COMPLETE':
      return {
        ...state,
        status: 'CONFIRMING',
        id: user.id,
        name: user.name,
        email: user.email,
        avatar_url: `${url}${user.avatar_url}`
      }

    case 'UPDATE_USER_VALUE':
      const { name, value } = change
      return {
        ...state,
        [name]: value
      }

    default:
      return state;
  }
}

export default user
