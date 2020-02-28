import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitLogin } from '../actions/auth'
import Login from '../components/Login'
import Logout from '../components/Logout'

class Auth extends Component {

  render() {
    return(
      <div>
        <Login
          submitLogin={this.props.submitLogin}
        />
        <Logout/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitLogin: user => dispatch(submitLogin(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
