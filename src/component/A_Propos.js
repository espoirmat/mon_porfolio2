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
                <p>Je suis une jeune développeuse œuvrant dans le domaine du frontend depuis plus d'un an maintenant. Mon attirance pour la beauté et mode alliée à mon expérience restent mes principaux atouts pour créer au quotidien des sites et applications web attrayants tout en tenant compte de l'expérience utilisateur.</p>
                <div className='button'><a href='#'>Me Contacter </a></div>
            </div>
        </div>
    

    </div>
  )
}

export default A_Propos
