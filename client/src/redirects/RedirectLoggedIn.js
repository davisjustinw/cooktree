import React from 'react'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { mapUserToProps } from '../stores/mappers'

const RedirectLoggedIn = ({ status, id, match, location, history }) => {
    
  if (status === 'LOGGED_IN') {
    console.log("redirecting from login")
    // may need a check here for authorized routes
    //const { from } = location.state || { from: { pathname: `people/${person.id}/connections` }}
    return <Redirect to={{ pathname: `users/${id}/connections` }} />
  }
  return null
}

export default withRouter(connect(mapUserToProps)(RedirectLoggedIn))
