import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { convertToRaw, EditorState } from 'draft-js'

const MyEditor = dynamic(() => import('@components/MyEditor'), {
  ssr: false,
})

const Home = () => {
  const [articleBody, setArticleBody] = useState(EditorState.createEmpty())

  return (
    <div css={{ display: 'grid' }}>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 50%)',
        }}
      >
        <div>
          <h1>Editor</h1>
          <MyEditor onChange={(state) => setArticleBody(state)} />
        </div>
        <div css={{ borderLeft: '1px solid #ccc', padding: '50px' }}>
          {JSON.stringify(convertToRaw(articleBody.getCurrentContent()))}
        </div>
      </div>
    </div>
  )
}

export default Home
