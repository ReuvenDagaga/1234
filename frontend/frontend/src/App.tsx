import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Game from './components/Game/Game'

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/game" element={<Game />} />
    </Routes>
    )
}

export default App
