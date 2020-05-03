import React from 'react'
import { connect } from 'react-redux'
import { mapUiToProps } from '../stores/mappers'
import { toggleHistoryOpen } from '../stores/ui/uiActions'

import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import HistoryContents from './HistoryContents'

const HistoryDrawer = ({ historyOpen, toggleHistoryOpen }) => {

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

export default connect(mapUiToProps, { toggleHistoryOpen })(HistoryDrawer)
