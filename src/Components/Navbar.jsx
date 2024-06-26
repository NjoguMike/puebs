import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Assets/puebloico.jpg'
import { FaPhone, FaCaretDown } from 'react-icons/fa'

function Navbar() {
  return (
    <div className='nav'>
        <img className='App-logo' src={logo} alt='logo' />
        <ul className='navbar'>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About Us</Link>
            <div className='dropdown'>
              <Link to={'/services'} className='dropbtn'>Our Services <span><FaCaretDown size={13}/></span></Link>
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
        <button >
          <Link className='call-button' to={`tel:254708741800`}>
            <span className='phone'><FaPhone /></span>
            <span>Call Us</span>
          </Link>
        </button>
    </div>
  )
}

export default Navbar