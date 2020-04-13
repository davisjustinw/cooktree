import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { changeHandler } from '../helpers/form'
import { connect } from 'react-redux'
import { submitSignup } from '../stores/user/userActions'

import Typography from '@material-ui/core/Typography'
import AvatarUpload from '../components/AvatarUpload'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import RedirectLoggedIn from '../redirects/RedirectLoggedIn'


class Signup extends Component {
  constructor() {
    super()
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
    const { classes, errors } = this.props
    const { state, handleChange, handleFileChange, handleSubmit } = this
    const { file } = state

    return (
      <>
        <RedirectLoggedIn/>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <AvatarUpload
            handleFileChange={handleFileChange}
            id="avatar"
            name="avatar"
            file={file}
          />

          <form noValidate className={classes.form} onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              value={state.name}
              error={!!errors.user.name}
              helperText={errors.user.name}
              variant="filled"
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoFocus
              required
            />
            <TextField
              onChange={handleChange}
              value={state.email}
              error={!!errors.user.email}
              helperText={errors.user.email}
              variant="filled"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              required
            />

            <TextField
              onChange={handleChange}
              value={state.password}
              error={!!errors.user.password}
              helperText={errors.user.password}
              variant="filled"
              margin="normal"
              fullWidth
              id="password"
              label="Password"
              name="password"
              required
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </>
    )
  }
}

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
});

const mapStateToProps = ({ error }) => ({
  errors: error.validation_errors
})

const mapDispatchToProps = dispatch => ({
    submitSignup: user => dispatch(submitSignup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Signup));
