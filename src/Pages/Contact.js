import React from 'react'
import ContactForm from '../Components/ContactForm'

function Contact() {
  return (
    <div>
      <div>
        <h2>CONTACT INFO</h2>
        <b><p>We’d love to hear about your digital marketing needs. To help us get an idea of what you need, please fill in this contact form and we’ll get right back to you.</p></b>
        <p>Puelbo Colorado</p>
        <p>Mail: badassmarketers@gmail.com</p>
        <p>Phone: 719-628-1673</p>
        <div>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Youtube</span>
        </div>
      </div>
      <div className=''>
        <h2>CONTACT FORM</h2>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact