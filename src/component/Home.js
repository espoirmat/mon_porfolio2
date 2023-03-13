import React from 'react'
import '../style/Home.css'
import A_Propos from './A_Propos'
import Competence from './Competence'
import Contact from './Contact'
import Experience from './Experience'
import Footer from './Footer'
import Realisation from './Realisation'
import Sur_Moi from './Sur_Moi'
import '../style/Nav_Bar.css' 
import { BsSun } from 'react-icons/bs';

function Home() {
  return (
    <div className='home'>
      <div className='nav_bar'>
        <h3>Espoir </h3>
        <div className='links'>
            <a href='#'>Home</a> 
            <a href='#'>A Propos</a>
            <a href='#'>Compétences</a>
            <a href='#'>Expériences</a>
            <a href='#'>Réalisations</a>
            <a href='#contact'>Contact</a>
            <a href='#'>Home</a>
            <a href='#'><BsSun /></a>
        </div>
      </div>
      <Sur_Moi/>
      <A_Propos/>
      <Competence/>
      <Experience/>
      <Realisation/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home
