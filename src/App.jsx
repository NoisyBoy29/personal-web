import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { motion } from 'framer-motion'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <h1>hello world</h1>
      </div>
    </Router>
  )
}

export default App