import React from 'react'
import { connect } from 'react-redux'
import { mapAuthToProps } from './helpers/stateMappers'
import { Link as RouterLink } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'

const UserDrawer = ({ user, person }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { email } = user
  const { name } = person
  let avatar = ''

  if(person.avatar) {
    avatar = `http://localhost:3001${person.avatar}`
  }

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
          <Avatar
            alt={name || 'avatar'}
            src={avatar}
          >
            {!avatar ? <ScatterPlotIcon/> : null}
          </Avatar>
        }
        title={name}
        subheader={email}
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

export default connect(mapAuthToProps)(UserDrawer)
