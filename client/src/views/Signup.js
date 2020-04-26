import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { changeHandler } from '../helpers/form'
import { connect } from 'react-redux'
import { submitSignup } from '../stores/user/userActions'
import SignupForm from '../components/SignupForm'


class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      avatar_file: '',
      avatar_url: ''
    }
  }

  handleChange = changeHandler.bind(this);

  handleSubmit = event => {
      event.preventDefault()
      console.log('handleSubmit')
      console.log(this.state)
      const { state, props } = this
      const { name, email, password, avatar_file } = state
      const data = new FormData()

      data.append('email', email)
      data.append('password', password)
      data.append('name', name)
      data.append('avatar', avatar_file)

      props.submitSignup(data);
  }

  render() {
    const { errors, classes } = this.props
    const { state, handleChange, handleSubmit } = this

    return (
      <SignupForm
        classes={classes}
        errors={errors}
        user={state}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    )
  }
}

const mapStateToProps = ({ error }) => ({
  errors: error.validation_errors
})

const mapDispatchToProps = dispatch => ({
    submitSignup: user => dispatch(submitSignup(user))
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Signup))
