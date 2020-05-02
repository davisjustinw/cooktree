import  { RichUtils } from 'draft-js';

const defaultStyle = {
  background: 'blue',
  padding: '0 .3em',
  color: '#fff',
};

export default (style = {}) => {
  return {
    customStyleMap: {
      'SUBTITLE': {
        ...defaultStyle,
        ...style
      }
    },
    keyBindingFn: (e) => {
      if (e.metaKey && e.key === 'h') {
        return 'subtitle';
      }
    },
    handleKeyCommand: (command, editorState, eventTimeStamp, { setEditorState }) => {
      if (command === 'subtitle') {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'SUBTITLE'));
        return true;
      }
    },
  };
};
