import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const Connections = props => {
  const classes = useStyles()

  return (
    <>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h2>Connections</h2>
      </main>
    </>
  )
}

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default Connections
