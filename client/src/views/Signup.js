import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { changeHandler } from '../helpers/form'
import { connect } from 'react-redux'
import { submitSignup } from '../stores/user/userActions'
import RedirectLoggedIn from '../redirects/RedirectLoggedIn'
import Typography from '@material-ui/core/Typography'
import AvatarUpload from '../components/AvatarUpload'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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
      const { state, props } = this
      const { name, email, password, avatar_file } = state
      const data = new FormData()

      data.append('email', email)
      data.append('password', password)
      data.append('name', name)
      data.append('avatar_file', avatar_file)

      props.submitSignup(data);
  }

  render() {
    const { errors, classes } = this.props
    const { state, handleChange, handleSubmit } = this

    return (
      <>
        <RedirectLoggedIn/>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>

          <AvatarUpload
            handleChange={handleChange}
            avatar_file={state.avatar_file}
            avatar_url={state.avatar_url}
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
