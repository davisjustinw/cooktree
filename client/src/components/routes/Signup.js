import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { changeHandler } from '../../handlers/form'
import { connect } from 'react-redux'
import { submitSignup } from '../../actions/auth'

import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'
import Avatar from '@material-ui/core/Avatar'
import RedirectLoggedIn from '../redirects/RedirectLoggedIn'
import FileUpload from '../FileUpload'

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
          <Avatar
            alt={file.name || 'avatar'}
            src={file.url}
            className={classes.avatar}
          >
            <ScatterPlotIcon />
          </Avatar>
          <form noValidate className={classes.form} onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              value={state.name}
              error={!!errors.person.name}
              helperText={errors.person.name}
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

            <FileUpload
              handleFileChange={handleFileChange}
              id="avatar"
              name="avatar"
              file={file}
              className={classes.button}
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
  avatar: {
    marginTop: theme.spacing(1),
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
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
