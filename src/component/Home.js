import React from 'react'
import '../style/Home.css'
import A_Propos from './A_Propos'
import Competence from './Competence'
import Experience from './Experience'
import Nav_Bar from './Nav_Bar'
import Sur_Moi from './Sur_Moi'

function Home() {
  return (
    <div className='home'>
      <Nav_Bar/>
      <Sur_Moi/>
      <A_Propos/>
      <Competence/>
      <Experience/>
    </div>
  )
}

export default Home
