import React from 'react'
import { connect } from 'react-redux'
import { submitLogout } from '../actions/auth'

const Logout = props => {
  const handleSubmit = (event) => {
    event.preventDefault()
    props.submitLogout()
  }

  return (
    <button onClick={handleSubmit}>Logout</button>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitLogout: () => dispatch(submitLogout())
  }
}

export default connect(null, mapDispatchToProps)(Logout);
