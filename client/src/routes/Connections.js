import React, { useState, useEffect } from 'react'
import { getHeader, url } from '../actions/fetchHelpers'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import ConnectionCard from '../components/ConnectionCard'

const Connections = ({ person }) => {
  const { id } = person
  const classes = useStyles()
  const [connections, setConnections] = useState([])

  useEffect(() => {
    fetch(`${url}/connections?person_id=${id}`, getHeader)
      .then(resp => resp.json())
      .then(connections => {
        setConnections(connections)
      })
      .catch(console.log)
  }, [id])


  return (
    <>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h2>Connections</h2>
        {
          connections.map(connection => {
            const {relationship, relation} = connection
            const { id, name, avatar_url } = relation
            return (
              <ConnectionCard
                key={id}
                avatar_url={avatar_url}
                name={name}
                relationship={relationship}
                id={id}
              />
            )
          })
        }
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

const mapStateToProps = ({ auth }) => ({
  person: auth.person
})

export default connect(mapStateToProps)(Connections)
