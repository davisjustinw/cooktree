export default function manageLogin(
  state = {
    user: {
      email: 'one@two.com'
    }
  },
  action
) {
  switch (action.type) {

    default:
      return state;
  }
}
