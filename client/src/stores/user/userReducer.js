import { url } from '../helpers/fetchHelpers'

const initialState = {
  status: 'LOGGING_IN',
  id: '',
  token: '',
  name: '',
  email: '',
  password: '',
  avatar_url: '',
  avatar_file: ''
}

function user(state = initialState, { type, user, token, change }) {
  switch (type) {
    case 'SUBMIT_LOGIN':
      return {
        ...state,
        status: 'LOGGING_IN'
      }

    case 'SUBMIT_LOGIN_COMPLETE':
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
        token: '',
        name: '',
        email: '',
        password: '',
        avatar_url: '',
        avatar_file: ''
      }

    case 'SUBMIT_LOGOUT_COMPLETE':
      return {
        ...state
      }

    case 'SUBMIT_SIGNUP':
      return {
        ...state,
        status: 'LOGGING_IN',
      }

    case 'SUBMIT_TOKEN_SIGNUP':
      return {
        ...state,
        status: 'LOGGING_IN'
      }

    case 'GET_CURRENT_USER':
      return {
        ...state,
        status: 'LOGGING_IN',
      }

    case 'GET_CURRENT_USER_COMPLETE':
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
        token: token,
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
