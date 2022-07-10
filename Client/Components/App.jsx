import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Exhibitions from './Exhibitions/Exhibitions'

function App() {
  console.log('hitting app')
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={ <Exhibitions/>}/>
      </Routes>
    </div>
  )
}

export default App