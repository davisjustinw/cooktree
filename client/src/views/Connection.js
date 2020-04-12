import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getConnection } from '../stores/connection/connectionActions'
import { mapConnectionToProps } from '../stores/mappers'
import { url } from '../stores/helpers/fetchHelpers'

import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot'
import Loading from '../components/Loading'

class Connection extends Component {
  componentDidMount(){
    console.log('connection mounting')
    this.props.getConnection(this.props.match.params.id)
  }

  render() {
    const { name, avatar_url, relationship } = this.props
    if(!name){
      return <Loading/>
    } else {
      return (
        <>
          <Typography variant='h4' >{name}</Typography>
          <Typography variant='h6'>{relationship}</Typography>
          <Avatar
            alt={name || 'avatar'}
            src={`${url}${avatar_url}`}
          >
            {!avatar_url ? <ScatterPlotIcon/> : null}
          </Avatar>
        </>
      )
    } // else
  } //render
} // class Connection

const mapDispatchToProps = dispatch => ({
  getConnection: connectionId => dispatch(getConnection(connectionId))
})

export default withRouter(connect(mapConnectionToProps, mapDispatchToProps)(Connection))
