import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../Assets/Digital_daktariz_logo.png'
import { FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'

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
            <div className='socials'>
                <div>
                    <p>Puelbo Colorado <br/> Mail: badassmarketers@gmail.com <br/> Phone: 719-628-1673</p>
                </div>
                <div>
                    <span><FaFacebook /></span>
                    <span><FaInstagram /></span>
                    <span><FaYoutube /></span>
                </div>

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