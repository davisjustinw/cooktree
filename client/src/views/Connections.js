import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getConnections } from '../stores/connection/connectionActions'
import { withStyles } from '@material-ui/core/styles'

import { Link as RouterLink } from 'react-router-dom'
import ConnectionCard from '../components/ConnectionCard'
import Loading from '../components/Loading'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'

class Connections extends Component {
  componentDidMount() {
    this.props.getConnections(this.props.personId)
  }

  render(){
    const { connections, classes, personId } = this.props
    if(!connections){
      return <Loading/>
    } else {
      return (
      <>
        <Typography variant='h4' gutterBottom>
          Connections
        </Typography>
        {
          connections.map(connection => {

          const { id, relationship, relation } = connection
          const { name, avatar_url } = relation

          return (
            <ConnectionCard
              key={id}
              avatar_url={avatar_url}
              name={name}
              relationship={relationship}
              personId={personId}
              id={id}
            />)
          })
        }
        <Fab
          component={RouterLink}
          to={`/people/${personId}/connections/new`}
          color="secondary"
          className={classes.fab}
        >
          <AddIcon />
        </Fab>
      </>
    )
    }
  }
}

const mapStateToProps = ({ connection, user }) => {
  return {
    connections: connection.list,
    personId: user.personId
  }
}

const mapDispatchToProps = (dispatch) => ({
  getConnections: personId => dispatch(getConnections(personId))
})

const useStyles = theme => ({
  fab: {
    margin: theme.spacing(0),
    top: 'auto',
    right: theme.spacing(3),
    bottom: theme.spacing(3),
    left: 'auto',
    position: 'fixed',
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(Connections))
