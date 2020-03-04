
const submitLogin = ({email, password}) => {
  return (dispatch) => {
    dispatch({ type: 'PENDING_REQUEST' })

    const headers = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {email, password}
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
    dispatch({ type: 'PENDING_REQUEST' })

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

const submitSignup = userInfo => {
  return (dispatch) => {
    dispatch({ type: 'PENDING_REQUEST' })

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
    fetch("http://localhost:3001/signup", headers)
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

const getCurrentUser = () => {
  return dispatch => {
    dispatch({ type: 'PENDING_REQUEST' })

    const headers = {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    }

    fetch("http://localhost:3001/get_current_user", headers)
      .then(resp => resp.json())
      .then(({user}) => {
          console.log(user)
          dispatch({
            type: 'GET_CURRENT_USER',
            user: user
          })
        }
      )
      .catch(console.log)
  }
}



export {
  submitLogin,
  submitLogout,
  submitSignup,
  getCurrentUser
}
