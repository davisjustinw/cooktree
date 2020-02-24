const submitLogin = (email) => {
  return {
    type: 'SUBMIT_LOGIN',
    userInfo: {
      email: email
    }
  }
}

export {
  submitLogin
}
