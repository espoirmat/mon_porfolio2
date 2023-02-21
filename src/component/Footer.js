import React from 'react'
import { FiInstagram } from 'react-icons/fi';
import { RxTwitterLogo } from 'react-icons/rx';
import { GrLinkedinOption } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';

function Footer() {
  return (
    <div className='footer'>
      <h2>Espoir Masevo</h2>
      <p>Développeuse frontend</p>
      <div className='links'>
      <a href="https://www.instagram.com/hopematondo"><FiInstagram/></a> 
      <a href="https://twitter.com/hpmasevo"><RxTwitterLogo/></a>
      <a href="https://www.linkedin.com/in/espoir-matondo-a050a6231/"> <GrLinkedinOption/></a>
      <a href="https://github.com/espoirmat"><BsGithub/></a>
      </div>
    </div>
  )
}

export default Footer
