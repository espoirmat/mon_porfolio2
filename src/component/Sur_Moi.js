import profil from '../assets/profil.jpeg'
import '../style/Sur_Moi.css'
import React from 'react'
import { FiArrowRightCircle } from 'react-icons/fi';

function Sur_Moi() {
  return (
    <div className='About_me'>
    <div className='About'>
      <h1>Salut, je suis Espoir!! </h1>
      <h2>Dévellopeuse Web</h2>
      <p> Ma mission etant développeur Front-end consiste à participer à la création de l'interface utilisateur d'un site ou d'une application web. j'interviens sur tous les éléments apparaissant à l'écran et géré par le navigateur web de l'utilisateur.</p>
      <div className='button'><a href='#'>Me Contacter <span></span> <FiArrowRightCircle /> </a></div>
    </div>
      
      <img src={profil}/>
   
    </div>
  )
}

export default Sur_Moi
