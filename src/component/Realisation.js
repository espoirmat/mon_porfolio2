import React from 'react'
import '../style/realisations.css'
import capture7 from '../assets/capture7.PNG'
import capture6 from '../assets/Capture6.PNG'
import capture5 from '../assets/Capture5.PNG'
import capture4 from '../assets/Capture4.PNG'
import capture3 from '../assets/Capture3.PNG'
import capture2 from '../assets/Capture2.PNG'
import capture1 from '../assets/Capture1.PNG'

function Realisation() {
  return (
    <div className='realisations'>
        <h2>Expériences</h2>
        <p>Mon expérience professionnelle & scolaire</p>
        <div className='conteneur'>
            <div className='real'>
                <img src={capture7}/>
                <h2>Site web</h2>
                <p>Il s'agit de la réproduction de la page d'accueil du site de BlueFontier</p>
                <div className='links'><span className='text'>HTML</span><span className='text'>SASS</span><span className='text'>JS</span></div>
                <a href=''>Regardez!!</a>
            </div>
            <div className='real'> 
                <img src={capture1}/>
            </div>
            <div className='real'> 
                <img src={capture2}/>
            </div>
            <div className='real'>
                <img src={capture3}/>
            </div>
            <div className='real'>
                <img src={capture4}/>
            </div>
            <div className='real'>
                <img src={capture5}/>
            </div>
            <div className='real'>
                <img src={capture6}/>
            </div>  
        </div>
    </div>
  )
}

export default Realisation
