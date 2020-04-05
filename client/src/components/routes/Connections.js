import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getConnections } from '../../actions/requesters'
import { withStyles } from '@material-ui/core/styles'

import { Link as RouterLink } from 'react-router-dom'
import ConnectionCard from '../ConnectionCard'
import Loading from '../Loading'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Typography from '@material-ui/core/Typography'

class Connections extends Component {
  componentDidMount() {
    console.log('mounting')
    this.props.getConnections(this.props.person.id)
  }

  render(){
    const { connections, classes, person } = this.props
    console.log(connections)
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
          const {relationship, relation} = connection
          const { id, name, avatar_url } = relation
          return (
            <ConnectionCard
              key={id}
              avatar_url={avatar_url}
              name={name}
              relationship={relationship}
              id={id}
            />)
          })
        }
        <Fab
          component={RouterLink}
          to={`/people/${person.id}/connections/new`}
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

const mapStateToProps = ({auth, requesters}) => ({
  person: auth.person,
  connections: requesters.connections
})

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
