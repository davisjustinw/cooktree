import React, { createRef, Component } from 'react'
import { withStyles } from '@material-ui/core/styles'

import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined'
import IconButton from '@material-ui/core/IconButton'
import CardMedia from '@material-ui/core/CardMedia'
import CardActionArea from '@material-ui/core/CardActionArea'

class PhotoUpload extends Component {
  constructor(props) {
    super(props)
    this.fileUpload = createRef()
  }

  showFileUpload = () => {
    console.log('showFileUpload')
    this.fileUpload.current.click();
  }

  handleFileChange = ({ target }) => {
    const { handleMemoryChange } = this.props
    // conditional protects against user canceling
    if(target.files[0]) {
      const file = target.files[0]
      const file_url = URL.createObjectURL(file)
      handleMemoryChange({ target: { name: 'photoFile', value: file }})
      handleMemoryChange({ target: { name: 'photoUrl', value: file_url }})
    }
  }

  render() {
    const { classes, memory } = this.props
    return (
      <>
        <input
          onChange={this.handleFileChange}
          ref={this.fileUpload}
          accept="image/*"
          id='photoFile'
          name='photoFile'
          type="file"
          hidden
        />

        <CardActionArea
          onClick={this.showFileUpload}
          className={classes.actionArea}
        >
          {
            memory.photoUrl ? (
              <CardMedia
                component="img"
                alt="memory"
                height="240"
                image={memory.photoUrl}
                title="memory"
              />
            ):(
              <AddAPhotoOutlinedIcon className={classes.photoIcon}/>
            )
          }
        </CardActionArea>

      </>
    )
  }
}

const useStyles = theme => ({
  photoIcon: {
    fontSize: 100,
    height: 240,
    color: theme.palette.text.hint,
  },
  actionArea: {
    display: 'flex'
  }
});

export default withStyles(useStyles)(PhotoUpload)
