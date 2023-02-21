import React from 'react'
import '../style/Home.css'
import Nav_Bar from './Nav_Bar'
import Sur_Moi from './Sur_Moi'

function Home() {
  return (
    <div className='home'>
      <Nav_Bar/>
      <Sur_Moi/>
    </div>
  )
}

export default Home
