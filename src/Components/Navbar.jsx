import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
        <ul className='nav'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/services'}>Our Services</Link>
            <Link to={'/contact'}>Contact Us</Link>
        </ul>
        <button>Call Us</button>
    </div>
  )
}

export default Navbar