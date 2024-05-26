import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


function Contacts() {
  return (
    <div className='our-contacts'>
        <div>
            <p>Reach us on <br/> Mail: badassmarketers@gmail.com <br/> Phone: 719-628-1673</p>
        </div>
        <span><FaFacebook /></span>
        <span><FaInstagram /></span>
        <span><FaYoutube /></span>
    </div>
  )
}

export default Contacts