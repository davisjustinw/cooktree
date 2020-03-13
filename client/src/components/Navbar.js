import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AuthButton from './AuthButton'
import HistoryIcon from '@material-ui/icons/History'
import SearchBar from './SearchBar'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    }
  },
  title: {
    flexGrow: 1
  }
}))

const NavBar = props => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          onClick={props.handleDrawerToggle}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Cook Tree
        </Typography>
        <AuthButton/>
        <SearchBar />
        <HistoryIcon />
      </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar
