import React from 'react'
import image from '../assets/image.jpg'
import '../style/A_Propos.css'
import espoir_cv from '../assets/espoir_cv.pdf'
import { AiOutlineDownload } from 'react-icons/ai';
function A_Propos() {
  return (
    <div className='A_Propos'>

        <h2>A Propos de moi</h2>

        <h4>Qui suis je ?</h4>

        <div className='propos'>
            <img src={image}/>
            <div className='text'>
                <p>Je suis une jeune développeuse œuvrant dans le domaine du frontend depuis plus d'un an maintenant. Mon attirance pour la beauté et mode alliée à mon expérience restent mes principaux atouts pour créer au quotidien des sites et applications web attrayants tout en tenant compte de l'expérience utilisateur.</p>
                <div className='contenue'>
                    <div>
                        <h2>12+</h2>
                        <p>Mois <br/> d'experience</p>
                    </div>
                    <div>
                        <h2>12+</h2>
                        <p>Mois <br/> d'experience</p>
                    </div>
                    <div>
                        <h2>12+</h2>
                        <p>Mois <br/>d'experience</p>
                    </div>
                </div>
                <div className='button'><a href='' download={espoir_cv}>Mon CV<i><AiOutlineDownload /></i> </a></div>
            </div>
        </div>
    

    </div>
  )
}

export default A_Propos
