import React, { Component } from 'react'
import { connect } from 'react-redux'
import ConnectionCard from '../ConnectionCard'
import { getConnections } from '../../actions/requesters'
import Loading from '../Loading'

class Connections extends Component {
  componentDidMount() {
    console.log('mounting')
    this.props.getConnections(this.props.person.id)
  }

  render(){
    const { connections } = this.props
    console.log(connections)
    if(!connections){
      return <Loading/>
    } else {
      return (
      <>
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
              />)
            })
        }
      </>
    )
    }
  }
}

const mapStateToProps = ({auth, requesters}) => ({
  person: auth.person,
  connections: requesters.connections,
  requesting: requesters.requesting
})

const mapDispatchToProps = (dispatch) => ({
  getConnections: personId => dispatch(getConnections(personId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Connections)
