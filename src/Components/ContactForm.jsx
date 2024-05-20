import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function ContactForm() {
  return (
    <div className='our-contacts'>
      <div className='contact-info'>
        <div>
          <p>Reach us on <br/> Mail: badassmarketers@gmail.com <br/> Phone: 719-628-1673</p>
        </div>
        <span><FaFacebook /></span>
        <span><FaInstagram /></span>
        <span><FaYoutube /></span>
      </div>
      <form className='contact-form'>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' name='name' />
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' name='email' />
        <label htmlFor='phone'>Phone</label>
        <input id='phone' type='text' name='phonne' />
        <label htmlFor='description'>How can we help?</label>
        <input id='description' type='text-area' name='text' />
        <button>Let's Chat!</button>
      </form>
    </div>

  )
}

export default ContactForm