import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Project from './components/Project'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Header' element={<Header />} />
        <Route path='/Body' element={<Body />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App