import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

import { changeHandler } from '../handlers/form'
import { submitLogin } from '../actions/auth'

class Login extends Component {
  constructor(props) {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = changeHandler.bind(this);

  handleSubmit = (event) => {
      event.preventDefault()
      this.props.submitLogin(this.state);
  }

  render() {
    const { redirectToReferrer } = this.props

    if (redirectToReferrer === true) {
      return <Redirect to='/recipes' />
    }
    return (
      <div className='login'>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type='text'
            name='email'
            value={this.state.email}
            placeholder='email'
          /><br/>
          <input
            onChange={this.handleChange}
            type='text'
            name='password'
            value={this.state.password}
            placeholder='password'
          /><br/>
          <input type='submit'/>
        </form>
      </div> //end login
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  redirectToReferrer: auth.redirectToReferrer
})

const mapDispatchToProps = (dispatch) => {
  return {
    submitLogin: user => dispatch(submitLogin(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
