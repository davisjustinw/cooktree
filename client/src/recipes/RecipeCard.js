import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/Styles'
import Typography from '@material-ui/core/Typography'
import Ingredient from './Ingredient'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import { EditorState } from 'draft-js'
import createSubtitlePlugin from '../plugins/subtitlePlugin'
import Editor from 'draft-js-plugins-editor'

const subtitlePlugin = createSubtitlePlugin();

class RecipeCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    }
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  }

  render() {
    return (
      <>
        <Card variant='outlined' >
          <CardContent className={this.props.classes.root}>
            <Editor
              editorState={this.state.editorState}
              onChange={this.onChange}
              plugins={[subtitlePlugin]}
            />
          </CardContent >
        </Card>
      </>
    )
  }
}

const useStyles = theme => ({
  subtitle: {
    color: "red"
  },
  root: {
    padding: theme.spacing(3),
  },
  list: {
    paddingBottom: '0px'
  },
  sectionSubtitle: {
    marginTop: theme.spacing(2)
  }
})

export default withStyles(useStyles)(RecipeCard)
