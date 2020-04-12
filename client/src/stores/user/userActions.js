
const submitLogin = ({email, password}) => {
  return (dispatch) => {
    dispatch({ type: 'PENDING_LOGIN' })
    const headers = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: { email, password }
      })
    }
    fetch('http://localhost:3001/login', headers)
      .then(resp => resp.json())
      .then(json => {
        catch_errors_dispatch_login(json, dispatch)
      })
      .catch((error) => {
        console.error('Fetch error', error)
      })
  }
}

const submitLogout = () => {
  return dispatch => {
    dispatch({ type: 'SUBMIT_LOGOUT' })
    dispatch({ type: 'TOGGLE_MOBILE_OPEN'})
    const headers = {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch('http://localhost:3001/logout', headers)
      .then(resp => resp.json())
      .then(({message}) => {
          console.log(message)
        }
      )
      .catch(console.log)
  }
}

const submitSignup = userInfo => {
  return (dispatch) => {
    dispatch({ type: 'PENDING_LOGIN' })
    const headers = {
      method: 'POST',
      credentials: 'include',
      body: userInfo
    }
    fetch('http://localhost:3001/signup', headers)
      .then(resp => resp.json())
      .then(json => {
        catch_errors_dispatch_login(json, dispatch)
      })
      .catch((error) => {
        console.error('Fetch error', error)
      })
  }
}

const getCurrentUser = () => {
  console.log('getCurrentUser')
  return dispatch => {
    dispatch({ type: 'PENDING_LOGIN' })

    const headers = {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch('http://localhost:3001/get_current_user', headers)
      .then(resp => resp.json())
      .then(({user, person}) => {
          dispatch({
            type: 'GET_CURRENT_USER',
            user: user,
            person: person
          })
        }
      )
      .catch(console.log)
  }
}

const catch_errors_dispatch_login = ({ user, person, error, validation_errors }, dispatch) => {
    if(user){
      console.log('user')
      dispatch({ type: 'CLEAR_ERRORS' })
      dispatch({
        type: 'SUBMIT_LOGIN',
        user: user,
        person: person
      })
    } else if (error) {
      dispatch({
        type: 'UPDATE_ERRORS',
        error: error
      })
    } else if (validation_errors) {
      console.log('validation_errors')
      dispatch({
        type: 'UPDATE_VALIDATION_ERRORS',
        validation_errors: validation_errors
      })
    }
}

export {
  submitLogin,
  submitLogout,
  submitSignup,
  getCurrentUser
}