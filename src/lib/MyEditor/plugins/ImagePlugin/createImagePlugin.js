import React from 'react'

import { addImage, removeBlock } from './modifiers'
import { ImageComponent } from './components'

const defaultTheme = {
  image: null,
}

const createCustomImagePlugin = (config = {}) => {
  const theme = config.theme ? config.theme : defaultTheme
  let Image = config.imageComponent || ImageComponent

  if (config.decorator) {
    Image = config.decorator(Image)
  }

  const ThemedImage = (props) => <Image {...props} theme={theme} />

  return {
    blockRendererFn: (block, methods) => {
      const {
        setEditorState,
        getEditorState,
        getReadOnly,
        setReadOnly,
      } = methods

      if (block.getType() === 'atomic') {
        const contentState = getEditorState().getCurrentContent()
        const entity = block.getEntityAt(0)

        if (!entity) return null

        const type = contentState.getEntity(entity).getType()

        if (type === 'IMAGE' || type === 'image') {
          const removeBlockHandler = () => {
            const editorState = getEditorState()
            const key = editorState.getSelection().getStartKey()
            const newEditorState = removeBlock(editorState, key)

            if (newEditorState !== editorState) {
              setEditorState(newEditorState)
              return 'handled'
            }
          }

          return {
            component: ThemedImage,
            editable: false,
            props: {
              setReadOnly,
              getReadOnly,
              removeBlockHandler,
            },
          }
        }

        return null
      }

      return null
    },
    addImage,
  }
}

export default createCustomImagePlugin
