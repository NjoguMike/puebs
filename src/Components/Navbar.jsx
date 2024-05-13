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
            <div className='dropdown'>
              <Link to={'/services'} className='dropbtn'>Our Services</Link>
              <div class="dropdown-content">
                <Link to={'services/seo'}>SEO</Link>
                <Link to={'services/web_design'}>Web Design</Link>
                <Link to={'services/local_map_listing'}>Local Map Listing</Link>
                <Link to={'services/social_media_ads'}>Social Media Ads</Link>
                <Link to={'services/google_ads'}>Google Ads (PPC)</Link>
              </div>
            </div>
            <Link to={'/contact'}>Contact Us</Link>
        </ul>
        <button>Call Us</button>
    </div>
  )
}

export default Navbar