import React from 'react'
import profile_2 from '../Assets/profile_2.jpg'
import landing from '../Assets/landing.jpg'

function About() {
  return (
    <main className='about'>
      <div className='header'>
        <h1>About Us</h1>
        <div className='intro'>
          <div className='intro_card'>
            <p>Pueblo SEO is an internet marketing firm that can provide you with the complete set of services you need to dominate your local market through online methods. With us, you get incredible web development, SEO <b><em>(search engine optimization)</em></b> services, and insight on how to utilize tools from Google and Facebook. Our focus is on helping businesses here in Pueblo, Colorado use web development techniques to expand their customer base, increase sales, and retain customers for the long haul.</p>
            <p>For great <b><em>web development</em></b> in Pueblo, Colorado, you need more than just a sleek website design. There are incredible web design teams that focus solely on the way your website looks, but when they are rooted in best SEO practices, mobile-friendly designs, click-to-call, and analytics, they don’t have the ability to reach an audience.</p>
            <p>
            In addition to using your website development to increase the visibility of your site, we also make sure that your website is conducive to getting sales leads. For starters, we create web designs that are mobile-friendly, because so much of the market right now is determined by people searching for things on their smartphones. Additionally, we use analytics, click-to-call buttons, and contact forms to gather information and get you directly in touch with the people that need your business. When we combine these methods, you will see the number of sales leads for your business shoot through the roof. Calls are coming in, contact information is coming in for you to directly respond, and your business is now easier than ever to find online.
            </p>
          </div>
          <div className='intro_image'>
                <img src={landing} alt='landing-view' className='header_image'/>
            </div>   
        </div>
  
      </div>
      <div className='team'>
        <h1>Meet the Team</h1>
        <div className='team_container'>
          <div className='team_card'>
            <img src={profile_2} alt='about pic' />
            <h3>Joshua T. Osborne</h3>
            <p>Josh has been a master in the digital marketing space for over 10 years. Josh loves bringing major results to each and everyone of his customers. Josh is well known for training hundreds of digital marketers around the world and has developed courses for insurance, mortgage, seo, social media management so that others can easily apply his training's to gain results fast. </p>
          </div>
          <div className='team_card'>
            <img src={profile_2} alt='about pic' />
            <h3>Joshua T. Osborne</h3>
            <p>Josh has been a master in the digital marketing space for over 10 years. Josh loves bringing major results to each and everyone of his customers. Josh is well known for training hundreds of digital marketers around the world and has developed courses for insurance, mortgage, seo, social media management so that others can easily apply his training's to gain results fast. </p>
          </div>
          <div className='team_card'>
            <img src={profile_2} alt='about pic' />
            <h3>Joshua T. Osborne</h3>
            <p>Josh has been a master in the digital marketing space for over 10 years. Josh loves bringing major results to each and everyone of his customers. Josh is well known for training hundreds of digital marketers around the world and has developed courses for insurance, mortgage, seo, social media management so that others can easily apply his training's to gain results fast. </p>
          </div>    
        </div>

      </div>
    </main>
  )
}

export default About