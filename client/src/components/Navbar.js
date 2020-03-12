import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AuthButton from './AuthButton'
import TabBar from './TabBar'
import HistoryIcon from '@material-ui/icons/History'
import SearchBar from './SearchBar'

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

const NavBar = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
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
      <TabBar/>
    </div>
  )
}

export default NavBar
