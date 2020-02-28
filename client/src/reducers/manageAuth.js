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
    case 'PENDING_LOGIN':
      return {
        ...state,
        requesting: true
      }

    case 'SUBMIT_LOGIN':
      console.log('submiting')

      return {
        ...state,
        user: {
          email: action.user
        },
        requesting: false
      }

    default:
      return state;
  }
}
