import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Montaje from './components/Montaje'
import Actualizacion from './components/Actualizacion'
import Desmontaje from './components/Desmontaje'

function App() {

  return (
    <>
      {/* <Montaje /> */}
      {/* <Actualizacion /> */}
      <Desmontaje />
    </>
  )
}

export default App
