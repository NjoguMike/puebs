import React from 'react'

function ContactForm() {
  return (
    <div className='our-contacts'>
      <div className='contact-info'>
        <div>
          <p>Puelbo Colorado <br/> Mail: badassmarketers@gmail.com <br/> Phone: 719-628-1673</p>
        </div>
        <span>Facebook</span><br/>
        <span>Instagram</span><br/>
        <span>Youtube</span>
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