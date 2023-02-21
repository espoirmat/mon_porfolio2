import React from 'react'
import { TfiEmail } from 'react-icons/tfi';
import { MdLocationPin } from 'react-icons/md';
import { FiInstagram } from 'react-icons/fi';
import { RxTwitterLogo } from 'react-icons/rx';

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
