import React from 'react'
import { connect } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { withRouter } from 'react-router'
import Button from '@material-ui/core/Button'

const AuthButton = ({ authStatus, location }) => {

  if(location.pathname === '/login') {
    authStatus = 'AT_LOGIN'
  }

  switch(authStatus) {
    case 'LOGGED_IN':
      return (
        <Button color="inherit" component={RouterLink} to="/logout">
          Logout
        </Button>
      )
    case 'LOGGED_OUT':
      return (
        <Button color="inherit" component={RouterLink} to="/login">
          Login
        </Button>
      )
    default:
      return null
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    authStatus: auth.status
  }
}

export default connect(mapStateToProps)(withRouter(AuthButton))
