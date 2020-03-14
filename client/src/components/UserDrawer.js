import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'

const UserDrawer = props => {
  const classes = makeStyles( theme => ({
    user: {
      margin: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    chip: {
      marginTop: theme.spacing(1)
    }
  }))();

  return (
    <div className={classes.user}>
      <Avatar>
        M
      </Avatar>
      <Typography variant="h6">
        Musashi42
      </Typography>
      <Typography variant="subtitle2">
        one@two.com
      </Typography>
      <Chip
        label="logout"
        className={classes.chip}
        variant="outlined"
        size="small"
        clickable
        component={RouterLink}
        to='/logout'
      />

    </div>
  )
}

export default UserDrawer
