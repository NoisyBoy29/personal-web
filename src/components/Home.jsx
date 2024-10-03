import React from 'react'
import { motion } from 'framer-motion'

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl">I'm a web developer passionate about creating amazing experiences.</p>
    </motion.div>
  )
}

export default Home