import React, { Component } from 'react'
import { changeHandler } from '../handlers/form'
import { connect } from 'react-redux'
import { submitSignup } from '../actions/auth'

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'
import Avatar from '@material-ui/core/Avatar'
import FileUpload from '../components/FileUpload'

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      password: '',
      avatar: null,
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
      const { state } = this
      const { username, email, password, avatar } = state
      const data = new FormData()

      data.append('username', username)
      data.append('email', email)
      data.append('password', password)
      data.append('avatar', avatar)
      for(var pair of data.entries()) {
       console.log(pair[0]+ ', '+ pair[1]);
      }
      //this.props.submitSignup(data);
  }

  render() {
    const { classes } = this.props
    const { state, handleChange, handleFileChange, handleSubmit } = this
    const { file } = state

    return (
      <Container component="main" maxWidth="xs" className={classes.container}>
        <div className={classes.toolbar} />
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
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              value={state.username}
              variant="filled"
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
            <TextField
              onChange={handleChange}
              value={state.email}
              variant="filled"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
            />

            <TextField
              onChange={handleChange}
              value={state.password}
              variant="filled"
              margin="normal"
              fullWidth
              id="password"
              label="Password"
              name="password"
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
      </Container>

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
  toolbar: theme.mixins.toolbar,
  container: {
    marginBottom: theme.spacing(4)
  }

});

const mapDispatchToProps = dispatch => ({
    submitSignup: user => dispatch(submitSignup(user))
})

export default connect(null, mapDispatchToProps)(withStyles(useStyles)(Signup));
