import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import SwipeableTemporaryDrawer from './components/SwipeableTemporaryDrawer'
import { Catalog } from './components/Catalog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ResponsiveAppBar />
    
      <SwipeableTemporaryDrawer />

      <Catalog />

    </>
  )
}

export default App
