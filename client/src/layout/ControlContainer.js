import React from 'react'
import { connect } from 'react-redux'
import { mapLoginStatusToProps } from '../stores/mappers'
import Navbar from './Navbar'
import MenuDrawer from './MenuDrawer'
import HistoryDrawer from './HistoryDrawer'

const ControlContainer = ({ status }) => {
  return (
    <>
      <Navbar />
      { status === 'LOGGED_IN' ? (
        <>
          { console.log('logged in control container')}
          <MenuDrawer />
          <HistoryDrawer />
        </>
      ) : ( null ) }
    </>
  )
}

export default connect(mapLoginStatusToProps)(ControlContainer)
