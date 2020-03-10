import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'
import { withRouter } from 'react-router'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const Navbar = props => {
  const { user, location, ...rest } = props
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {location.pathname}
        </Typography>

        {

          location.pathname !== '/login' && user ? (
            <Button color="inherit" component={RouterLink} to="/logout">
              Logout
            </Button>
          ) : (
            null
          )
        }

      </Toolbar>
      </AppBar>

      { user ? (
        <NavLink to="/logout">
          Logout
        </NavLink>
      ) :(
        <NavLink to="/login">
          Login
        </NavLink>
      )}
      <NavLink to="/recipes">
        Recipes
      </NavLink>

    </div>
  )
}

const mapStateToProps = ({ auth }) => ({ user: auth.user })
export default connect(mapStateToProps)(withRouter(Navbar))
