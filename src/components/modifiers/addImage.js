import { EditorState, AtomicBlockUtils } from 'draft-js'

export default (editorState, url, extraData) => {
  const contentState = editorState.getCurrentContent()
  const contentStateWithEntity = contentState.createEntity(
    'IMAGE',
    'IMMUTABLE',
    { src: url, ...extraData },
  )

  const entityKey = contentStateWithEntity.getLastCreatedEntityKey()
  const newEditorState = AtomicBlockUtils.insertAtomicBlock(
    editorState,
    entityKey,
    ' ',
  )

  return EditorState.forceSelection(
    newEditorState,
    newEditorState.getCurrentContent().getSelectionAfter(),
  )
}
