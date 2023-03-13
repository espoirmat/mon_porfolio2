import React from 'react'
import '../style/Home.css'
import A_Propos from './A_Propos'
import Competence from './Competence'
import Contact from './Contact'
import Experience from './Experience'
import Footer from './Footer'
import Nav_Bar from './Nav_Bar'
import Realisation from './Realisation'
import Sur_Moi from './Sur_Moi'

function Home() {
  return (
    <div className='home'>
      <Nav_Bar/>
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
