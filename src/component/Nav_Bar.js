import React from 'react'
import '../style/Nav_Bar.css' 
import { BsSun } from 'react-icons/bs';

function Nav_Bar() {
  return (
    <div className='nav_bar'>
        <h3>Espoir </h3>
        <div className='links'>
            <a href='#'>Home</a> 
            <a href='#A_Propos'>A Propos</a>
            <a href='#'>Compétences</a>
            <a href='#'>Expériences</a>
            <a href='#'>Réalisations</a>
            <a href='#contact'>Contact</a>
            <a href='#'>Home</a>
            <a href='#'><BsSun /></a>
        </div>
    </div>
  )
}

export default Nav_Bar
