import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { submitLogout } from '../../actions/auth'

const Logout = ({ submitLogout }) => {
  submitLogout()
  return (<Redirect to='/login' />)
}

export default connect(null, { submitLogout })(Logout);
