import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Assets/puebloico.jpg'

function Navbar() {
  return (
    <div className='nav'>
        <img className='App-logo' src={logo} alt='logo' />
        <ul className='navbar'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About Us</Link>
            <Link to={'/services'} className='dropbtn'>Our Services</Link>
            <div class="dropdown-content">
              <Link to={'/seo'}>SEO</Link>
              <Link to={'/web-design'}>Web Design</Link>
              <Link to={'/local-map-listing'}>Local Map Listing</Link>
              <Link to={'/social-media-ads'}>Social Media Ads</Link>
              <Link to={'/google-ads'}>Google Ads (PPC)</Link>
            </div>
            <Link to={'/contact'}>Contact Us</Link>
        </ul>
        <button>Call Us</button>
    </div>
  )
}

export default Navbar