import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeHandler } from '../handlers/form'

class Login extends Component {
  constructor(props) {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = changeHandler.bind(this);

  render() {
    return (
      <form>
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
          placeholder='password   '
        /><br/>
        <input type='submit'/>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Login);
