import React from 'react'
import { connect } from 'react-redux'
import { mapUiToProps } from '../stores/mappers'
import { toggleHistoryOpen } from '../stores/ui/uiActions'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import HistoryContents from './HistoryContents'

const HistoryDrawer = ({ historyOpen, toggleHistoryOpen }) => {
  const classes = useStyles()

  return (
    <menu >
      <Hidden lgUp implementation="css">
        <Drawer
          variant="temporary"
          anchor='right'
          open={historyOpen}
          onClose={toggleHistoryOpen}

          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <HistoryContents toggleHistoryOpen={toggleHistoryOpen} temporary />
        </Drawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Drawer
          variant="permanent"
          open
          anchor='right'
        >
          <HistoryContents toggleHistoryOpen={toggleHistoryOpen} />
        </Drawer>
      </Hidden>
    </menu>
  )
}

const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('lg')]: {
      width: 240,
      flexShrink: 0,
    }
  },
  toolbar: theme.mixins.toolbar,
}));

export default connect(mapUiToProps, { toggleHistoryOpen })(HistoryDrawer)
