import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
  render() {
    return (
      <p>{this.props.user.email}</p>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Login);
