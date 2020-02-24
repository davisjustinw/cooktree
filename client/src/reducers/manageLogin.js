export default function manageLogin(
  state = {
    user: {
      email: ''
    }
  },
  action
) {
  switch (action.type) {
    case 'SUBMIT_LOGIN':
      return {
        ...state,
        user: {
          email: action.userInfo.email
        }
      }

    default:
      return state;
  }
}
