import React from 'react'

import addImage from './modifiers/addImage'

const CustomImage = (props) => {
  const {
    block,
    blockProps,
    customStyleMap,
    customStyleFn,
    decorator,
    forceSelection,
    offsetKey,
    selection,
    tree,
    contentState,
    style,
    ...elementProps
  } = props

  const isFocused = props.blockProps.isFocused
  const { src } = contentState.getEntity(block.getEntityAt(0)).getData()

  return (
    <div
      {...elementProps}
      css={{
        position: 'relative',
        border: `3px solid ${isFocused ? '#ffed51' : 'transparent'}`,
      }}
      style={{ ...style }}
    >
      {isFocused && (
        <div
          onClick={() => console.log('delete')}
          css={{
            padding: '10px',
            backgroundColor: '#fff',
            position: 'absolute',
            top: '5px',
            right: '5px',
          }}
        >
          Delete
        </div>
      )}
      <img src={src} alt="" />
    </div>
  )
}

const createCustomImagePlugin = (config = {}) => {
  const component = config.decorator
    ? config.decorator(CustomImage)
    : CustomImage

  return {
    blockRendererFn: (block, { getEditorState }) => {
      if (block.getType() === 'atomic') {
        const contentState = getEditorState().getCurrentContent()
        const entity = contentState.getEntity(block.getEntityAt(0))
        const type = entity.getType()

        if (type === 'IMAGE') {
          return {
            component,
            editable: false,
          }
        }
      }

      return null
    },
    addImage,
  }
}

export default createCustomImagePlugin
