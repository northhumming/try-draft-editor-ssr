import React from 'react'

const ImageComponent = (props) => {
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
    onClick,
    ...elementProps
  } = props

  const { isFocused, setReadOnly } = blockProps

  const { src, caption } = contentState
    .getEntity(block.getEntityAt(0))
    .getData()

  const handleDrop = (event) => {
    event.preventDefault()
    event.stopPropagation()
  }

  const handleCaptionChange = (event) => {
    event.stopPropagation()
  }

  const onBlur = () => {
    setReadOnly(false)
  }

  const onFocus = () => {
    setReadOnly(true)
    event.preventDefault()
    event.stopPropagation()
  }

  return (
    <div>
      <div
        onClick={onClick}
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
          <input
            type="text"
            onDrop={handleDrop}
            onChange={handleCaptionChange}
            onBlur={onBlur}
            onFocus={onFocus}
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ImageComponent
