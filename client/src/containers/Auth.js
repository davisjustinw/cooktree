import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitLogin } from '../actions/login'
import Login from '../components/Login'

class Auth extends Component {

  render() {
    return(
      <Login
        submitLogin={this.props.submitLogin}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  submitLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
