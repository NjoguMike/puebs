import React from 'react'

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
        <form>
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
    </div>
  )
}

export default Contact