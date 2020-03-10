import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
    const { redirectToReferrer, location } = this.props

    if (redirectToReferrer === true) {
      const { from } = location.state || { from: { pathname: '/' } }
      return <Redirect to={from} />
    }
    return (
        <form onSubmit={this.handleSubmit}>
          <h2>Login</h2>
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

          <Button type='submit' variant="contained">Submit</Button>
        </form>
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
