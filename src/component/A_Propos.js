import React from 'react'
import image from '../assets/image.jpg'
import '../style/A_Propos.css'
function A_Propos() {
  return (
    <div className='A_Propos'>

        <h2>A Propos de moi</h2>

        <h4>Qui suis je ?</h4>

        <div className='propos'>
            <img src={image}/>
            <div className='text'>
            <h1>Salut, je suis Espoir!! </h1>
            <h2>Dévellopeuse Front End</h2>
            <p> Ma mission etant développeur Front-end consiste à participer à la création de l'interface utilisateur d'un site ou d'une application web. j'interviens sur tous les éléments apparaissant à l'écran et géré par le navigateur web de l'utilisateur.</p>
            <div className='button'><a href='#'>Me Contacter </a></div>
        </div>
  </div>
    

    </div>
  )
}

export default A_Propos
