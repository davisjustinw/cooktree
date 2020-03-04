import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { changeHandler } from '../handlers/form'
import { submitLogin } from '../actions/auth'

class Login extends Component {
  constructor(props) {
    super()
    this.state = {
      redirectToReferrer: false,
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
        <Link to='/signup'>Signup</Link>
      </div> //end login
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitLogin: user => dispatch(submitLogin(user))
  }
}

export default connect(null, mapDispatchToProps)(Login);
