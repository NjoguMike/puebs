import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Assets/digital-daktariz-logo.png'
import { FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
        <div className='end_title'>
            <img className='logo' src={logo} alt='logo'/>
            <h2>LET’S CONNECT</h2>
        </div>
        <div className='footer-container'>
            <div className='contact_us'>
                <p>Office hours | 8am-5pm <br/><br/> Office Location:  </p>
                <h3>CONTACT US</h3>
                <p>Digital Daktariz Kenya: badassmarketers@gmail.com <br/><br/> Phone: +254-708-741-800</p>

                <div className='socials'>
                    <span><FaFacebook color='#0e53d4' size={30}/></span>
                    <span id='insta'><FaInstagram size={30}/></span>
                    <span><FaYoutube color='red' size={30}/></span>
                </div>
            </div>
            <div className='navigation'>
                <h3>NAVIGATION</h3>
                <hr/>
                <ul className='nav-footer'>
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