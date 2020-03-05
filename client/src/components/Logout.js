import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { submitLogout } from '../actions/auth'

const Logout = props => {
  props.submitLogout()

  return (<Redirect to='/' />)
}

export default connect(null, { submitLogout })(Logout);
