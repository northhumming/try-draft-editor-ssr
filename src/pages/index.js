import React from 'react'
import dynamic from 'next/dynamic'

const MyEditor = dynamic(() => import('@components/MyEditor'), {
  ssr: false,
})

const Home = () => (
  <div css={{ minHeight: '100vh' }}>
    <div css={{ width: '600px', margin: '0 auto' }}>
      <h1>Editor</h1>
      <MyEditor />
    </div>
  </div>
)

export default Home
