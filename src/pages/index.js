import React from 'react'

import { Container } from '@components/Container'
import { MyEditor } from '@components/MyEditor'
import { DarkModeSwitch } from '@components/DarkModeSwitch'

const Home = () => (
  <Container>
    <DarkModeSwitch />
    <div css={{ minHeight: '100vh' }}>
      <div css={{ width: '300px', margin: '0 auto' }}>
        <MyEditor />
      </div>
    </div>
  </Container>
)

export default Home
