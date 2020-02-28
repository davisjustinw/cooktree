import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitLogin, submitLogout } from '../actions/auth'
import Login from '../components/Login'
import Logout from '../components/Logout'

class Auth extends Component {

  render() {
    const current_user = this.props.user.email
    return(
      <div>
        <h2>
          { current_user ?
              `Logged in as ${current_user}` :
              'not logged in'
          }
        </h2>
        {
          current_user ?
            <Logout
              submitLogout={this.props.submitLogout}
            /> :
            <Login
              submitLogin={this.props.submitLogin}
            />
        }
        
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
    submitLogin: user => dispatch(submitLogin(user)),
    submitLogout: () => dispatch(submitLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
