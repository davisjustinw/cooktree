import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { submitSignup, getTokenUser, handleUserChange } from '../stores/user/userActions'
import { withRouter } from 'react-router'
import SignupForm from '../components/SignupForm'
import RedirectLoggedIn from '../redirects/RedirectLoggedIn'

class Confirm extends Component {
  componentDidMount() {
    const { token } = this.props.match.params
    console.log(`token: ${token}`)
    this.props.getTokenUser(token)
  }

  handleChange = ({ target }) => {
    this.props.handleUserChange({ name: target.name, value: target.value })
  }

  handleSubmit = event => {
      event.preventDefault()
      const { state, props } = this
      const { name, email, password, avatar } = state
      const data = new FormData()

      data.append('email', email)
      data.append('password', password)
      data.append('name', name)
      data.append('avatar', avatar)

      props.submitSignup(data);
  }

  render() {
    const { errors, classes, user } = this.props
    const { handleChange, handleSubmit } = this

    return (
      <>
        <RedirectLoggedIn />
        <SignupForm
          classes={classes}
          errors={errors}
          user={user}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </>
    )

  }
}

const mapStateToProps = ({ error, user }) => ({
  errors: error.validation_errors,
  user: user
})

const mapDispatchToProps = dispatch => ({
    submitSignup: user => dispatch(submitSignup(user)),
    getTokenUser: token => dispatch(getTokenUser(token)),
    handleUserChange: change => dispatch(handleUserChange(change))
})

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    marginTop: theme.spacing(3),
  },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Confirm)))
