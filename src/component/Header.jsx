import React from 'react'
import iceCream from '../assets/img/ice-cream.svg'
import '../assets/css/header.css'


function Header() {
  return (

    <header>
        <img src={iceCream} alt="icecream" />
        <h1>Ice World</h1>
    </header>
   
  )
}

export default Header