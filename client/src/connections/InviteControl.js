import React from 'react'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles'

const InviteControl = ({ user, toggleInvite, expand }) => {

  const classes = useStyles()

  switch(user.status) {
    case 'NO_INVITE':
      return (
        <Button
          onClick={toggleInvite}
          className={expand ? classes.activated : null}
          size="small"
          color="primary"
        >
          Invite
        </Button>
      )
    case 'INVITED':
      return (
        <Button disabled size="small">
          Invited
        </Button>
      )
    case 'CONFIRMED':
    default:
      return null
  }
}

const useStyles = makeStyles(theme => ({
  activated: {
    backgroundColor: theme.palette.action.hover
  }
}))

export default InviteControl
