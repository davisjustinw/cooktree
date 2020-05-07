import React { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Memory from './Memory'

class Memories extends Component {
  componentDidMount(){
    this.props.getMemories(this.props.recipe)
  }

  render(){

    return (
      <>

      </>
    )
  }// end render
}// end class

export default Memories
