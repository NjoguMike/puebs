import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../Assets/Digital_daktariz_logo.png'
import { FaPhone, FaCaretDown } from 'react-icons/fa'
import { Fade as Hamburger } from 'hamburger-react'

function Navbar() {

  const [isOpen , setClass] = useState("closed_menu")

  return (
    <div id='nav'>
        <img className='App-logo' src={logo} alt='logo' />
        <ul id='navbar' className={isOpen}>
            <Link className='a' to={'/'}>Home</Link>
            <Link className='a' to={'/about'}>About Us</Link>
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
            <Link className='a' to={'/contact'}>Contact Us</Link>
            <Link className='call-button' to={`tel:254708741800`}>
              <span>Call Us</span>
              <span className='phone'><FaPhone /></span>
            </Link>
        </ul>
        <span id='hamburger'><Hamburger onToggle={ open => {
          if(open){
            setClass('open_menu')
          } else{
            setClass('closed_menu')
          }
        }} />
        </span>
    </div>
  )
}

export default Navbar