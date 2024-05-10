import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
        <div>
            <h2>CONTACT US</h2>
            <p>PUELBO COLORADO | 8AM-5PM <br/> BADASSMARKETERS@GMAIL.COM </p>
        </div>
        <div>
            <h2>LET’S CONNECT</h2>
        </div>
        <div>
            <h2>NAVIGATION</h2>
            <ul className='nav'>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About Us</Link>
                <Link to={'/seo'}>Our Seo</Link>
                <Link to={'/privacy'}>Privacy</Link>
            </ul>
        </div>
    </div>
  )
}

export default Footer