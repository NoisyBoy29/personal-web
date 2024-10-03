import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Home from './components/Home'
// import About from './components/About'
// import Projects from './components/Projects'
// import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <motion.main 
          className="flex-grow container mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  )
}

export default App