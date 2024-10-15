import React from 'react'

import Logo from './components/Logo/logo'
import UiUx from './components/UiUx/uiux'
import Admin from './components/Admin/admin'
const App = () => {
  return (
    <div className='container'>
      <Logo />
      <UiUx />
      <Admin />
    </div>
  )
}

export default App