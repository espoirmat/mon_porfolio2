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
        <h2>réalisations</h2>
        <p>Quelques projets réalisés</p>
        <div className='conteneur'>
            <div className='real'>
                <img src={capture7}/>
                <h2>Site web</h2>
                <p>Il s'agit de la réproduction d'une maquette pour un site web E-commerce de ventes des vêtements pour femmes. </p>
                <div className='links'><span className='text'>HTML</span><span className='text'>SASS</span><span className='text'>JS</span></div>
                <a href=''>Regardez!!</a>
            </div>

            <div className='real'> 
                <img src={capture1}/>
                <h2>Page web</h2>
                <p>Il s'agit d'une page librairie, pour les amoureux de la culture asiatiques. Dont les mangas, webtoon et manhua </p>
                <div className='links'><span className='text'>HTML</span><span className='text'>CSS</span><span className='text'>PHP</span></div>
                <a href=''>Regardez!!</a>
            </div>
            <div className='real'> 
                <img src={capture2}/>
                <h2>Site web</h2>
                <p>IIl s'agit d'un site web réaliser pour RFS consulting</p>
                <div className='links'><span className='text'>HTML</span><span className='text'>CSS</span></div>
                <a href=''>Regardez!!</a>
            </div>
            <div className='real'>
                <img src={capture3}/>
                <h2>Page web</h2>
                <p>Il s'agit d'une page web, réaliser en grouper pour l'agence Makambu</p>
                <div className='links'><span className='text'>HTML</span><span className='text'>CSS</span><span className='text'>JS</span></div>
                <a href=''>Regardez!!</a>
            </div>
            <div className='real'>
                <img src={capture4}/>
                <h2>Page web</h2>
                <p>Il s'agit de la prèmiere version de mon porfolio  </p>
                <div className='links'><span className='text'>HTML</span><span className='text'>SASS</span><span className='text'>JS</span></div>
                <a href=''>Regardez!!</a>
            </div>
            <div className='real'>
                <img src={capture5}/>
                <h2>Page web</h2>
                <p>Il s'agit de la reproduction exacte du design de télephone d'apple</p>
                <div className='links'><span className='text'>HTML</span><span className='text'>CSS</span><span className='text'>JS</span></div>
                <a href=''>Regardez!!</a>
            </div>
            <div className='real'>
                <img src={capture6}/>
                <h2>Page web</h2>
                <p>Il s'agit de l'intégration d'un design d'un site des photographies</p>
                <div className='links'><span className='text'>HTML</span><span className='text'>SAss</span></div>
                <a href=''>Regardez!!</a>
            </div>  
        </div>
    </div>
  )
}

export default Realisation
