import React from 'react'

import Typography from '@material-ui/core/Typography'
import AvatarUpload from '../components/AvatarUpload'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import RedirectLoggedIn from '../redirects/RedirectLoggedIn'

const SignupField = ({ classes, errors, user, handleChange, handleSubmit }) => {

  return (
    <>
        <form noValidate className={classes.form} onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            value={user.name}
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
            value={user.email}
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
            value={user.password}
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


        </form>
    </>
  )
}

export default SignupFields
