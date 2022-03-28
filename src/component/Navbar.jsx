import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'
import '../assets/css/navbar.css'

function Navbar() {
  return (
    <>
    <nav>
        <div className="navbar">
        <NavLink to='/'>
            Menu
        </NavLink>
        <Header />
        <NavLink to='/menu/addItem' >Add Item</NavLink>
        </div>
    </nav>
    </>
  )
}

export default Navbar