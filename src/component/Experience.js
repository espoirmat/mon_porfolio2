import React from 'react'
import '../style/Experience.css'
import { FaGraduationCap } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

function Experience() {
  return (
    <div className='Experience'>
        
    <h2>Expériences</h2>
    <p>Mon expérience professionnelle & scolaire</p>
    <div className='conteneur'>
    
        <div>
        <h2> <FaGraduationCap/> Scolaire</h2>
        <p></p>
        </div>

        <div></div>
        
        <div> 
        <h2> <MdWork/> Professionnel</h2>
        </div>
    </div>
</div>
  )
}

export default Experience
