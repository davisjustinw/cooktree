
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
  return dispatch => {
    dispatch({ type: 'PENDING_LOGOUT' })

    const headers = {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    }

    fetch("http://localhost:3001/logout", headers)
      .then(resp => resp.json())
      .then(({message}) => {
          console.log(message)
          dispatch({
            type: 'SUBMIT_LOGOUT'
          })
        }
      )
      .catch(console.log)

  }
}



export {
  submitLogin,
  submitLogout
}
