import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Assets/puebloico.jpg'

function Footer() {
  return (
    <div className='footer'>
        <h2>LET’S CONNECT</h2>
        <div className='footer-container'>
            <div>
                <img src={logo} alt='logo'/>
                <h3>CONTACT US</h3>
                <p>Pueblo Colorado | 8AM-5PM <br/><br/> badassmarketers@gmail.com</p>
            </div>
            <div className='navigation'>
                <h3>NAVIGATION</h3>
                <hr/>
                <ul className='nav nav-footer'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About Us</Link>
                    <Link to={'/seo'}>Our Seo</Link>
                    <Link to={'/privacy'}>Privacy</Link>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer