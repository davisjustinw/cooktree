import { url, getHeaderAnon } from '../helpers/fetchHelpers'

const submitLogin = ({email, password}) => {
  return (dispatch) => {
    dispatch({ type: 'SUBMIT_LOGIN' })
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
    fetch(`${url}/login`, headers)
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
    dispatch({ type: 'TOGGLE_MOBILE_OPEN_FALSE'})
    const headers = {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(`${url}/logout`, headers)
      .then(resp => resp.json())
      .then(({ message }) => {
          dispatch({ type: 'SUBMIT_LOGOUT_COMPLETE' })
          console.log(message)
        }
      )
      .catch(console.log)
  }
}

const submitSignup = userInfo => {
  return (dispatch) => {
    dispatch({ type: 'SUBMIT_SIGNUP' })
    const headers = {
      method: 'POST',
      credentials: 'include',
      body: userInfo
    }
    fetch(`${url}/signup`, headers)
      .then(resp => resp.json())
      .then(json => {
        catch_errors_dispatch_login(json, dispatch)
      })
      .catch((error) => {
        console.error('Fetch error', error)
      })
  }
}

const submitTokenSignup = userInfo => {
  return (dispatch) => {
    dispatch({ type: 'SUBMIT_TOKEN_SIGNUP' })
    const headers = {
      method: 'PUT',
      credentials: 'include',
      body: userInfo
    }
    fetch(`${url}/signup`, headers)
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

  return dispatch => {
    dispatch({ type: 'GET_CURRENT_USER' })

    const headers = {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(`${url}/get_current_user`, headers)
      .then(resp => resp.json())
      .then(user => {
          dispatch({
            type: 'GET_CURRENT_USER_COMPLETE',
            user: user
          })
        }
      )
      .catch(console.log)
  }
}

const getTokenUser = token => {
  return dispatch => {
    dispatch({ type: 'GET_TOKEN_USER' })
    fetch(`${url}/signup/${token}`, getHeaderAnon)
      .then(resp => resp.json())
      .then(({ user, connection }) => {
        const { relation, id } = connection
        dispatch({ type: 'GET_TOKEN_USER_COMPLETE', user: user, token: token })
        dispatch({
          type: 'GET_CONNECTION_COMPLETE',
          current: {
            id: id,
            relation_id: relation.id,
            name: relation.name,
            avatarUrl: relation.avatarUrl,
          } })
      })
  }
}

const catch_errors_dispatch_login = (resp, dispatch) => {
    console.log(resp)
    //const { user, error, validation_errors } = json
    if(resp.id){
      console.log('user')
      dispatch({ type: 'CLEAR_ERRORS' })
      dispatch({
        type: 'SUBMIT_LOGIN_COMPLETE',
        user: resp
      })
    } else if (resp.error) {
      dispatch({
        type: 'UPDATE_ERRORS',
        error: resp.error
      })
    } else if (resp.validation_errors) {
      console.log('validation_errors')
      dispatch({
        type: 'UPDATE_VALIDATION_ERRORS',
        validation_errors: resp.validation_errors
      })
    }
}

const handleUserChange = change => {
  return dispatch => {
    dispatch({
      type: 'UPDATE_USER_VALUE',
      change: change
    })
  }
}

export {
  submitLogin,
  submitLogout,
  submitSignup,
  submitTokenSignup,
  getCurrentUser,
  getTokenUser,
  handleUserChange
}
