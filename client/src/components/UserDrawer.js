import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Redirect } from 'react-router'
import { makeStyles } from '@material-ui/core/styles'

import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'

import MoreVertIcon from '@material-ui/icons/MoreVert'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const UserDrawer = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CardHeader
        avatar={
          <Avatar>
            M
          </Avatar>
        }
        title='Musashi42'
        subheader='one@two.com'
        action={
          <>
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Edit</MenuItem>
            <MenuItem
              component={RouterLink}
              to='/logout'
              onClick={handleClose}
            >
              Log out
            </MenuItem>
          </Menu>
          </>
        }
      />
    </>
  )
}

export default UserDrawer
