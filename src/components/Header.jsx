import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-4">
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/about" className="text-gray-800 hover:text-blue-600">About</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/projects" className="text-gray-800 hover:text-blue-600">Projects</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  )
}

export default Header