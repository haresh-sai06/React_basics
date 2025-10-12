import React from 'react'
import { Link } from 'react-router-dom'
import { About } from './About'
import { Home } from './Home'

export const Navbar = () => {
  return (
    <nav>
        <Link to="/" element={<Home/>} >Home</Link>
        <Link to="/about" element={<About/>} >About</Link>
    </nav>
  )
}
