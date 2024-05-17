import React from 'react'
import ContactForm from '../Components/ContactForm'

function Contact() {
  return (
    <div>
      <section>
        <h2>CONTACT INFO</h2>
          <b><p>We’d love to hear about your digital marketing needs. To help us get an idea of what you need, please fill in this contact form and we’ll get right back to you.</p></b>
          <p>Puelbo Colorado</p>
          <p>Mail: badassmarketers@gmail.com</p>
          <p>Phone: 719-628-1673</p>
        <section>
          <p>Call us right now and you can set up a free appointment to meet with us about the potential that our SEO web development strategy has for boosting your business. It is a risk free consultation that we are certain will give you the inspiration to take your business to the next level through top of the line internet marketing.</p>
        </section>
        <div>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>Youtube</span>
        </div>
      </section>
      <div className=''>
        <h2>CONTACT FORM</h2>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact