import React, { Component } from 'react'
import { convertFromRaw, EditorState } from 'draft-js'

import Editor, { composeDecorators } from 'draft-js-plugins-editor'
import createLinkifyPlugin from 'draft-js-linkify-plugin'
import createToolbarPlugin from 'draft-js-static-toolbar-plugin'
import createCounterPlugin from 'draft-js-counter-plugin'
import createFocusPlugin from 'draft-js-focus-plugin'

import createCustomImagePlugin from './createCustomImagePlugin'

import initialState from './initialState'

const linkifyPlugin = createLinkifyPlugin()
const staticToolbarPlugin = createToolbarPlugin()
const counterPlugin = createCounterPlugin()
const focusPlugin = createFocusPlugin()

const { Toolbar } = staticToolbarPlugin
const { CharCounter } = counterPlugin

const decorator = composeDecorators(focusPlugin.decorator)

const customImagePlugin = createCustomImagePlugin({ decorator })

const plugins = [
  staticToolbarPlugin,
  linkifyPlugin,
  counterPlugin,
  customImagePlugin,
  focusPlugin,
]

export default class SimpleMentionEditor extends Component {
  state = {
    editorState: EditorState.createWithContent(convertFromRaw(initialState)),
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
    })
  }

  focus = () => {
    this.editor.focus()
  }

  render() {
    return (
      <div onClick={this.focus}>
        <Toolbar />
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => {
            this.editor = element
          }}
        />
        <div>
          <CharCounter editorState={this.state.editorState} limit={200} /> / 200
        </div>
      </div>
    )
  }
}
