const initialState = {
  entityMap: {
    '0': {
      type: 'IMAGE',
      mutability: 'IMMUTABLE',
      data: {
        src: 'https://i.picsum.photos/id/766/800/400.jpg',
        alt: 'test 1',
        caption: 'photos caption 1',
      },
    },
    '1': {
      type: 'IMAGE',
      mutability: 'IMMUTABLE',
      data: {
        src: 'https://i.picsum.photos/id/767/800/400.jpg',
        alt: 'test 2',
        caption: 'photos caption 2',
      },
    },
  },
  blocks: [
    {
      key: '9gm3s',
      text:
        'This is a simple example. Focus the block by clicking on it and change alignment via the toolbar.',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: 'ov7r',
      text: ' ',
      type: 'atomic',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 0,
          length: 1,
          key: 0,
        },
      ],
      data: {},
    },
    {
      key: 'e23a8',
      text:
        'More text here to demonstrate how inline left/right alignment works …',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
    {
      key: 'sd3dz',
      text: ' ',
      type: 'atomic',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 0,
          length: 1,
          key: 1,
        },
      ],
      data: {},
    },
    {
      key: 'e23a9',
      text: 'zzzzzzzz',
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [],
      data: {},
    },
  ],
}

export default initialState
