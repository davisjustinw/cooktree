import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeHandler, loginHandler } from '../handlers/form'
import { submitLogin } from '../actions/login'

class Login extends Component {
  constructor(props) {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = changeHandler.bind(this);
  handleSubmit = loginHandler.bind(this);

  render() {
    return (
      <div className='login'>
        <h1>{this.props.user.email}</h1><br/>
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

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  submitLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
