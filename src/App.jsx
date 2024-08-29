import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Success from './components/Success'
import Error from './components/Error'

const App = () => {
  return (
    <>
    
    <Routes>
      <Route exect path='/' element={<Home/>}/>
      <Route path='/success' element={<Success/>}/>
      <Route path='/*' element={<Error/>}/>
    </Routes>
    </>
  )
}

export default App
