import React from 'react'
import landing_image from '../Assets/landing_image.jpg'
import landing_image2 from '../Assets/landing_image2.jpg'
import services_image from '../Assets/services_image.jpg'
import profile from '../Assets/profile.jpg'
import profile_2 from '../Assets/profile_2.jpg'
import profile_3 from '../Assets/profile_3.jpg'
import Slider from 'infinite-react-carousel';
import { FaSearch, FaArrowRight } from 'react-icons/fa'

function Home() {
    const testimonialSettings = {
        arrows:false,
        slidesToShow: 1,
        autoplay:true,
        autoplayScroll: 1,
        autoplaySpeed: 7000,
    }

  return (
    <div className='main'>
        <main className='landing'>
            <img src={landing_image} alt='landing' loading='lazy'/>
            <div className='landing_head'>
                <h1 id='a'>Digital</h1>
                <h1 id='b'>Daktariz</h1>
                <button>
                    <span className='search_text'> Explore </span>
                    <span className='search_icon'> <FaSearch /></span>
                </button>
            </div>
        </main>
        <section className='intro'>
            <div className='intro_card'>
                <h1>What Digital Daktariz brings You!</h1>
                <p>All of the search engines that people regularly use are using algorithms to determine which websites are most relevant to the search term that they are using. What our team does, is make sure that we have a complete understanding of how those algorithms work, and then we use your website and social media accounts to make sure that your business is the most relevant place for Google to send people for search terms that relate to your field. If you are in the process of building your audience and trying to take your business to the next level, then you have to be excited about the opportunities available to market your business on the internet. Every single project we launch here at Digital Daktariz marketing begins with a thorough, often intense planning process. We involve as many of our in-house experts as needed to ensure that your plan is sound and successful.</p>
                <button className='readmorebtn'>
                    <span>About Us </span>
                    <span className='icon'><FaArrowRight /></span>
                </button>
            </div>
            <div className='intro_image'>
                <img src={landing_image2} alt='landing-view' className='jumbo_image' loading='lazy'/>
            </div>
        </section>
        <section className='card_menu'>
            <div className='card'>
                <h3>SEO</h3>
                <p>Looking for an opportunity to connect with the right audience?, then SEO marketing is the way to go.</p>
            </div>
            <div className='card'>
                <h3>WEB DESIGN</h3>
                <p>Having a perfect pitch won’t do you any good if it isn’t pitched at the right time or place. We ensure every shilling spent contributes towards your ROI. </p>
            </div>
            <div className='card'>
                <h3>SOCIAL MEDIA Ads</h3>
                <p>Want a social media campaign that knocks people’s socks off? Well, so do we, and we know just what needs to happen to make that a reality. </p>
            </div>
        </section>
        <section className='intro'>
            <div className='intro_card'>
                <h1>SEO Services in Digital Daktariz</h1>
                <p>If you spent time looking into your marketing strategy in 2018 then you might have heard the term SEO thrown around a lot by peers as well as seen it online when looking for marketing services. SEO simply stands for <b>Search Engine Optimization</b>. Think about it, when you are looking for a restaurant, a plumber, a tow truck, or really just about anything, where do you go? Google, Google is the juggernaut but even people that don’t use google use a search engine of some kind to get information. Search engine optimization is the process that we use to boost your presence on search engine results in the area of your business.</p>
            </div>
            <div className='intro_image'>
                <img src={services_image} alt='landing-view' className='jumbo_image'/>
            </div>
        </section>
        <div className='call_to_action'></div>
        <section className='outro'>
            <div className='intro_card'>
                <h1>What our clients think</h1>
                <p>With <b>Digital Daktariz</b>, you get a team that understands the ins and outs of <b>internet marketing</b> and <b>web development</b> and will utilize all available tools to make sure that you are successful in generating sales leads so that you can grow your business. Our team is ready to put together a personalized plan for your business when you call us today and set up a free consultation. We look forward to helping you generate sales through revolutionary online marketing.</p>
            </div>
            <Slider {...testimonialSettings} className='testimonials'>
                <div className='client-card'>
                    <img src={profile} alt='client pic'/>
                    <q>Working with Digital Daktariz SE was a pleasure. Our PR team helped us stretch our thinking and found us new opportunities for growth. It was an amazing experience. </q>
                    <p>Jeremy Winston / Think Again</p>
                </div>
                <div className='client-card'>
                    <img src={profile_2} alt='client pic'/>
                    <q>Digital Daktariz approach to problem-solving is creative, fun and interesting. Together, we found solutions that were totally out of the box. Thanks GUYS! </q>
                    <p>Maryanne Quincy / RM WINDOW TINT</p>
                </div>
                <div className='client-card'>
                    <img src={profile_3} alt='section pic'/>
                    <q>Best marketing firm I have ever worked with. Can’t wait for the next project. </q>
                    <p>Renata Bergsman / SOCO HEATING AND COOLING</p>
                </div>
            </Slider>
        </section>
    </div>
  )
}

export default Home