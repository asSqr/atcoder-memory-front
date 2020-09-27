// from https://github.com/rexxars/react-markdown/blob/master/demo/src/editor.js
import React from 'react';
import PropTypes from 'prop-types';
import CodeMirror from './Editor';
import '../App.css';

const MarkDownEdit = props => {
  return (
    <form className="editor pure-form">
      <CodeMirror mode="markdown" theme="monokai" value={props.value} onChange={props.onChange} />
    </form>
  );
}

MarkDownEdit.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

MarkDownEdit.defaultProps = {
  value: ''
}

export default MarkDownEdit;