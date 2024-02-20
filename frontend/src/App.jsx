import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginUI from './LoginUI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginUI/>
    </>
  )
}

export default App
