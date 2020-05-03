import React from 'react'
import { connect } from 'react-redux'
import { mapUserToProps } from '../stores/mappers'
import { Link as RouterLink } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'

const UserDrawerHeader = ({ email, name, avatar_url }) => {
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
          <Avatar
            alt={name || 'avatar'}
            src={avatar_url}
          >
            {!avatar_url ? <ScatterPlotIcon/> : null}
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

export default connect(mapUserToProps)(UserDrawerHeader)
