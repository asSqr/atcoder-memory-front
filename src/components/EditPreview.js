import React, { Component } from 'react';
import toc from 'remark-toc';
import Markdown from 'react-markdown';
import MathJax from 'react-mathjax';
import RemarkMathPlugin from 'remark-math';
import MarkdownEdit from 'react-codemirror';
import MarkdownControls from './MarkdownControls';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';

class EditPreview extends Component {
  constructor(props) {
    super(props);

    this.handleControlsChange = this.handleControlsChange.bind(this)
    this.handleMarkdownChange = this.handleMarkdownChange.bind(this)
    this.state = {
      markdownSrc: '# Initial Source',
      htmlMode: 'raw'
    }
  }

  handleMarkdownChange(evt) {
    this.setState({markdownSrc: evt/*.target.value*/})
  }

  handleControlsChange(mode) {
    this.setState({htmlMode: mode})
  }

  render() {
    const options = {
      lineNumbers: true,
    }

    return (
      <div>
        <div style={{ height: '50%' }}>
          <MarkdownControls onChange={this.handleControlsChange} mode={this.state.htmlMode} />

          <MarkdownEdit value={this.state.markdownSrc} onChange={this.handleMarkdownChange} options={options} />
        </div>

        <div>
          <MathJax.Provider input="tex">
            <Markdown
              source={this.state.markdownSrc}
              skipHtml={false}
              escapeHtml={false}
              renderers={{
                math: props => {
                  return <MathJax.Node formula={props.value} />
                },
                inlineMath: props => {
                  return <MathJax.Node inline formula={props.value} />
                }
              }}
              plugins={[toc, RemarkMathPlugin]}
            ></Markdown>
          </MathJax.Provider>
        </div>
      </div>
    )
  }
}

export default EditPreview;