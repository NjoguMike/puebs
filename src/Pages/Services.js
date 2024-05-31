import React from 'react'
import googleads1 from '../Assets/googleads1.jpg'
import seo from '../Assets/seo.jpg'
import web_design from '../Assets/webdesign.jpg'
import local_map_listing from '../Assets/localmaplisting.jpg'
import social_media_ads from '../Assets/socialmediaads.jpg'
import Contacts from '../Components/Contacts';

function Services() {


  return (
    <div className='services_container'>
      <div className='service_header'>
        <h1>Services</h1>
        <p>We take a holistic approach to each and every project, employing all the pulling out all the stops to ensure that your project runs smoothand achieves the best results. </p>
      </div>
      <div className='services_gallery'>
        <div className='service_card'>
          <div className='card_content'>
            <h1>SEO</h1>
            <p>SEO sentence</p>
          </div>
          <img src={seo} alt=''/>
        </div>
        <div className='service_card'>
          <div className='card_content'>
            <h1>Web Design</h1>
            <p>Web Design sentence</p>
          </div>
          <img src={web_design} alt=''/>
        </div>
        <div className='service_card'>
          <div className='card_content'>
            <h1>Local Map listing</h1>
            <p>Local Map listing sentence</p>
          </div>
          <img src={local_map_listing} alt=''/>
        </div>
        <div className='service_card'>
          <div className='card_content'>
            <h1>Social Media Ads</h1>
            <p>Social Media Ads sentence</p>
          </div>
          <img src={social_media_ads} alt=''/>
        </div>
        <div className='service_card'>
          <div className='card_content'>
            <h1>Google Ads (PPC)</h1>
            <p>Google Ads (PPC) sentence</p>
          </div>
          <img src={googleads1} alt=''/>
        </div>
      </div>
      <Contacts/>
    </div>
  )
}

export default Services