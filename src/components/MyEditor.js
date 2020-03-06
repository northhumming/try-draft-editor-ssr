import React, { useState } from 'react'
import Editor from 'draft-js-plugins-editor'
import createLinkifyPlugin from 'draft-js-linkify-plugin'
import { EditorState } from 'draft-js'

const linkifyPlugin = createLinkifyPlugin()

const plugins = [linkifyPlugin]

export const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())

  const onChange = (editorState) => {
    setEditorState(editorState)
  }

  return (
    <div css={{ backgroundColor: '#fff', minHeight: '400px' }}>
      <Editor editorState={editorState} onChange={onChange} plugins={plugins} />
    </div>
  )
}
