import React from 'react'
import ContactForm from '../Components/ContactForm'
import Contacts from '../Components/Contacts'

function Contact() {
  return (
    <div>
      <div className='contact'>
        <h2>OUR CONTACT INFO</h2>
        <p>We’d love to hear about your digital marketing needs. To do so, please fill in this contact form and we’ll get right back to you.</p>
      </div>
      <div className='contact-form'>
        <p>Call us right now and you can set up a free appointment to meet with us about the potential that our SEO web development strategy has for boosting your business. It is a risk free consultation that we are certain will give you the inspiration to take your business to the next level through top of the line internet marketing.</p>
        <ContactForm />
      </div>
      <Contacts/>
    </div>
  )
}

export default Contact