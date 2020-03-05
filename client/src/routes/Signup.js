import React, { Component } from 'react'
import { changeHandler } from '../handlers/form'
import { connect } from 'react-redux'
import { submitSignup } from '../actions/auth'

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = changeHandler.bind(this);

  handleSubmit = event => {
      event.preventDefault()
      this.props.submitSignup(this.state);
  }

  render() {
    return (
      <div className='signup'>
        <h2>Signup</h2>
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

const mapDispatchToProps = dispatch => ({
    submitSignup: user => dispatch(submitSignup(user))
})

export default connect(null, mapDispatchToProps)(Signup);