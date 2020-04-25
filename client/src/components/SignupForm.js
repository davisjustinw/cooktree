import React from 'react'

import Typography from '@material-ui/core/Typography'
import AvatarUpload from '../components/AvatarUpload'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import RedirectLoggedIn from '../redirects/RedirectLoggedIn'

const SignupForm = ({ classes, errors, state, handleChange, handleSubmit, handleFileChange }) => {
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

export default SignupForm
