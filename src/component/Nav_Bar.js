import React from 'react'
import '../style/Nav_Bar.css'
import { BsSun } from 'react-icons/bs';

function Nav_Bar() {
  return (
    <div className='nav_bar'>
        <h3>Espoir </h3>
        <div className='links'>
            <a href='#'>Home</a>
            <a href='#'>A Propos</a>
            <a href='#'>Compétences</a>
            <a href='#'>Expériences</a>
            <a href='#'>Réaliqations</a>
            <a href='#'>Contact</a>
            <a href='#'>Home</a>
            <a href='#'><BsSun /></a>
        </div>
    </div>
  )
}

export default Nav_Bar
