import React from 'react'
import { connect } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import CardHeader from '@material-ui/core/CardHeader'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const UserDrawer = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { username, email } = props.user
  let avatar = ''

  if(props.user.avatar) {
    avatar = `http://localhost:3001${props.user.avatar}`
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
            alt={username || 'avatar'}
            src={avatar}
          >
            M
          </Avatar>
        }
        title={username}
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

const mapStateToProps = ({ auth }) => ({
  user: auth.user
})

export default connect(mapStateToProps)(UserDrawer)
