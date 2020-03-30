import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { url, getHeader } from '../actions/fetchHelpers'

const Connection = ({ match }) => {
  const classes = useStyles()
  const id = match.params.connectionId

  const [connection, setConnection] = useState([])

  useEffect(() => {
    fetch(`${url}/connections/${id}`, getHeader)
      .then(resp => resp.json())
      .then(connection => {
        setConnection(connection)
      })
      .catch(console.log)
  }, [id])


  return (
    <>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h1>Connection</h1>
        <h2>{id}</h2>
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

export default Connection
