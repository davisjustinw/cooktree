import React from 'react'
import { connect } from 'react-redux'
import { mapLoginStatusToProps } from '../stores/mappers'
import { withRouter } from 'react-router'
import { makeStyles } from '@material-ui/core/styles'
import { toggleMenuOpen, toggleHistoryOpen } from '../stores/ui/uiActions'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import HistoryIcon from '@material-ui/icons/History'
import SearchBar from './SearchBar'
import Hidden from '@material-ui/core/Hidden'
//navbar
const Navbar = ({ toggleMenuOpen, toggleHistoryOpen, location, status }) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
      {
        status === 'LOGGED_IN' ?
        (<>
          <Hidden lgUp implementation="css">
            <IconButton
              onClick={ toggleMenuOpen }
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden xsDown implementation="css" className={classes.title}>
            <Typography variant="h6" >
              Cook Tree
            </Typography>
          </Hidden>
          <SearchBar />

          <Hidden lgUp implementation="css">
            <IconButton
              onClick={ toggleHistoryOpen }
              edge="start"
              color="inherit"
            >
              <HistoryIcon />
            </IconButton>
          </Hidden>
          </>
        ) : null
      }
      </Toolbar>
    </AppBar>

  )
}

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  }
}))

export default withRouter(connect(mapLoginStatusToProps, { toggleMenuOpen, toggleHistoryOpen })(Navbar))
