import React from 'react'
import { connect } from 'react-redux'
import { mapUiToProps } from '../stores/mappers'
import { toggleHistoryOpen } from '../stores/ui/uiActions'
import { useRouteMatch } from 'react-router'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import HistoryContents from './HistoryContents'
import { makeStyles } from '@material-ui/core/styles'

const HistoryDrawer = ({ historyOpen, toggleHistoryOpen }) => {
  const recipesMatch = useRouteMatch('/users/:id/recipes/:id')
  const classes = useStyles()

  return (
    <>
    {recipesMatch ? (
      <menu className={classes.drawer} >
        <Hidden mdUp implementation="css">
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
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            anchor='right'
          >
            <HistoryContents toggleHistoryOpen={toggleHistoryOpen} />
          </Drawer>
        </Hidden>
      </menu>
    ):( null )}
    </>
  )

}

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 300
  }
}))

export default connect(mapUiToProps, { toggleHistoryOpen })(HistoryDrawer)
