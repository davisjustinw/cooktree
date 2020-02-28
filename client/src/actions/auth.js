
const submitLogin = userInfo => {
  return (dispatch) => {
    dispatch({ type: 'PENDING_LOGIN' })

    const headers = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: userInfo
      })
    }
    fetch("http://localhost:3001/login", headers)
      .then(resp => resp.json())
      .then(({user}) => {
          console.log(user)
          dispatch({
            type: 'SUBMIT_LOGIN',
            user: user
          })
        }
      )
      .catch(console.log)
  }
}

const submitLogout = () => {
  return {
    type: 'SUBMIT_LOGOUT'
  }
}



export {
  submitLogin,
  submitLogout
}
