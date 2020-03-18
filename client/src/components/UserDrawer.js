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

  const { email } = props.user
  const { name } = props.person
  let avatar = ''

  if(props.person.avatar) {
    avatar = `http://localhost:3001${props.person.avatar}`
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
            M
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

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
  person: auth.person
})

export default connect(mapStateToProps)(UserDrawer)
