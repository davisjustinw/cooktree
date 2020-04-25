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
      avatar: '',
      file: {
        name: '',
        url: null
      }
    }
  }

  handleChange = changeHandler.bind(this);

  handleFileChange = ({ target }) => {
    const file = target.files[0]

    this.setState({
      avatar: file,
      file: {
        name: target.value.split( '\\' ).pop(),
        url: URL.createObjectURL(file)
      }
    })
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
    const { errors, classes } = this.props
    const { state, handleChange, handleFileChange, handleSubmit } = this

    return (
      <SignupForm
        classes={classes}
        errors={errors}
        state={state}
        handleChange={handleChange}
        handleFileChange={handleFileChange}
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
