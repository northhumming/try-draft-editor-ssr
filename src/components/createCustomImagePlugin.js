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

  const { isFocused, setReadOnly } = blockProps

  const { src, caption } = contentState
    .getEntity(block.getEntityAt(0))
    .getData()

  const onBlur = () => {
    setReadOnly(false)
  }

  const onFocus = () => {
    setReadOnly(true)
  }

  return (
    <div
      {...elementProps}
      css={{
        position: 'relative',
        border: `3px solid ${isFocused ? '#ffed51' : 'transparent'}`,
        marginBottom: '15px',
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
      <div css={{ display: 'grid', justifyItems: 'center' }}>
        <img src={src} alt="" />
        <div>{caption}</div>
      </div>
      <div
        css={{
          padding: '10px',
          backgroundColor: '#fff',
          position: 'absolute',
          top: '5px',
          left: '5px',
          zIndex: '23',
        }}
      >
        <input type="text" onBlur={onBlur} onFocus={onFocus} />
      </div>
    </div>
  )
}

const defaultTheme = {
  image: null,
}

const createCustomImagePlugin = (config = {}) => {
  const theme = config.theme ? config.theme : defaultTheme
  let Image = config.imageComponent || CustomImage
  if (config.decorator) {
    Image = config.decorator(Image)
  }
  const ThemedImage = (props) => <Image {...props} theme={theme} />

  return {
    blockRendererFn: (block, methods) => {
      const { getEditorState, getReadOnly, setReadOnly } = methods

      if (block.getType() === 'atomic') {
        const contentState = getEditorState().getCurrentContent()
        const entity = block.getEntityAt(0)

        if (!entity) return null

        const type = contentState.getEntity(entity).getType()
        if (type === 'IMAGE' || type === 'image') {
          return {
            component: ThemedImage,
            editable: false,
            props: {
              setReadOnly,
              getReadOnly,
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
