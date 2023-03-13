import React from 'react'
import '../style/Contact.css'
import { TfiEmail } from 'react-icons/tfi';
import { MdLocationPin } from 'react-icons/md';

function Contact() {
  return (
    <div className='contact'>
      <h2>Mes contacts</h2>
      <p><a href='https://mail.google.com/mail/u/0/#inbox'><TfiEmail/>hpmasevo@gamil.com</a></p>
      <p><MdLocationPin/>Kinshasa, R.D.C</p>


    </div>
  )
}

export default Contact
