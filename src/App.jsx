import { useState } from 'react'
import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import CardArray from './components/CardArray.jsx'


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  return (
    <div>
      <Header />
      <Hero />
      <CardArray />
    </div>
  )
}

export default App
