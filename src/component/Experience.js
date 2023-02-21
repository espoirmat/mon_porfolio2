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

        <div className='conteneur1'>
        <h2> <FaGraduationCap/> Scolaire</h2>
        <p>
        <h3>Université</h3>
        Graduée en Informatique de gestion à l'Institut
        supérieur d'informatique, programmation et analyse <br/>
        <i>2017- 2020</i>
        </p>

        <p>
            <h3>Lycée</h3>
            Diplômé d'état en commercial et informatique 2011-2017
            au lycée VuVu Kieto
        </p>

        </div>

        <div className='line'></div>
        
        <div> 
            <h2> <MdWork/> Professionnel</h2>
            <p>
                <h3>Web design</h3>
                Création des designs graphique web pour le site rfs academia
                Et en freelance
            </p>

            <p>
                <h3>Community manager</h3>
                Gérance des pages réseaux sociaux de RFS Consulting <br/>
                gestions des pages réseaux sociaux de Kolletif Numérique

            </p>
        
        </div>
    </div>
</div>
  )
}

export default Experience
