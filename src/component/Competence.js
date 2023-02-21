import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import sass from '../assets/sass.png'
import mysql from '../assets/mysql.png'
import react from '../assets/react.png'
import canva from '../assets/canva.png'
import asana from '../assets/asana.png'
import figma from '../assets/figma.png'
import git from '../assets/git.png'
import postgre from '../assets/postgre.png'
import sqlserver from '../assets/sqlserver.png'
import ps from '../assets/ps.png'
import js from '../assets/js.png'
import php from '../assets/php.png'
import word from '../assets/word.png'
import '../style/Competence.css'


function Competence() {
  return (
    <div className='Competence'>
        
        <h2>Compétences</h2>
        <p>Les technologies et outils utilisés</p>
        <div className='image'>
            <img src={css}/>
            <img src={html}/>
            <img src={sass}/>
            <img src={js}/>
            <img src={react}/>
            <img src={canva}/>
            <img src={figma}/>
            <img src={git}/>
            <img src={mysql}/>
            <img src={postgre}/>
            <img src={sqlserver}/>
            <img src={ps}/>
            <img src={asana}/>
            <img src={php}/>
            <img src={word}/>
        </div>
    </div>
  )
}

export default Competence
