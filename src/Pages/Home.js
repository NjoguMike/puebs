import React from 'react'
import landing_image from '../Assets/landing_image.jpg'
import landing_main from '../Assets/landi.jpg'
import landing_image2 from '../Assets/landing_image2.jpg'
import profile from '../Assets/profile.jpg'
import profile_2 from '../Assets/profile_2.jpg'
import profile_3 from '../Assets/profile_3.jpg'
import Slider from 'infinite-react-carousel';

function Home() {

    const settings =  {
        arrows:false,
        autoplay: true,
        autoplayScroll: 1,
        autoplaySpeed: 7000,
        dots: true,
        slidesToShow: 1
      };
    const testimonialSettings = {
        arrows:false,
        slidesToShow: 2
    }

  return (
    <div className='main'>
        <Slider {...settings}>
            <div>
                <img src={landing_main} alt='landing-view' className='jumbo_image'/> 
            </div>
            <div>
                <img src={landing_image} alt='landing-view' className='jumbo_image'/> 
            </div>
            <div>
                <img src={landing_image2} alt='landing-view' className='jumbo_image'/> 
            </div>
        </Slider>
        <section className='intro'>
            <div className='intro_card'>
                <h1>What Pueblo brings You!</h1>
                <p>All of the search engines that people regularly use are using algorithms to determine which websites are most relevant to the search term that they are using. What our team does, is make sure that we have a complete understanding of how those algorithms work, and then we use your website and social media accounts to make sure that your business is the most relevant place for Google to send people for search terms that relate to your field. When people google to find the “best Mexican restaurant” there may actually be several around them that they don’t notice right away in the search results. With our strategy, we would make sure that restaurant is able to be seen right there on the first page of results, so that you do not miss out on any potential customers. If you are in the process of building your audience and trying to take your business to the next level, then you have to be excited about the opportunities available to market your business on the internet. Every single project we launch here at Pueblo marketing begins with a thorough, often intense planning process. We involve as many of our in-house experts as needed to ensure that your plan is sound and successful.</p>
            <button>Read More</button>
            </div>
            <div>
                <img src={landing_image2} alt='landing-view' className='jumbo_image'/> 
            </div>
        </section>
        <section className='card_menu'>
            <div className='card'>
                <h3>SEO</h3>
                <p>If you are looking for an opportunity to connect with the audience that is out there waiting for your products and services, then SEO marketing is the way to go.</p>
                <button>READ MORE</button>
            </div>
            <div className='card'>
                <h3>WEB DESIGN</h3>
                <p>Having a perfect pitch won’t do you any good if it isn’t pitched at the right time and place. And with the plethora of mediums out there today, that’s not easy. We ensure every media dollar you spend contributes towards your ROI. </p>
                <button>READ MORE</button>
            </div>
            <div className='card'>
                <h3>LOCAL MAP LISTING</h3>
                <p>Want a social media campaign that knocks people’s socks off? Well, so do we, and we know just what needs to happen to make that a reality. We’ll help you unlock the potential of your brand, and infuse it in all the right channels. </p>
                <button>READ MORE</button>
            </div>
        </section>
        <section>
            <img src='' alt='client pic'/>
            <div>
                <h3>SEO Services in Pueblo</h3>
                <p>If you have spent time looking into your marketing strategy in 2018 then you might have heard SEO thrown around a lot by peers as well as seen it online when looking for marketing services. SEO simply stands for <b>Search Engine Optimization</b>. Think about it, when you are looking for a restaurant, a plumber, a tow truck, or really just about any information, where do you go? Google is the juggernaut but even people that don’t use google use a search engine of some kind to get information. Search engine optimization is the scientific process that we use to boost your presence on search engine results in the area of your business.</p>
                <p>All of the search engines that people regularly use are using algorithms to determine which websites are most relevant to the search term that they are using. What our team does, is make sure that we have a complete understanding of how those algorithms work, and then we use your website and social media accounts to make sure that your business is the most relevant place for Google to send people for search terms that relate to your field. When people google to find the “best Mexican restaurant” there may actually be several around them that they don’t notice right away in the search results. With our strategy, we would make sure that restaurant is able to be seen right there on the first page of results, so that you do not miss out on any potential customers.</p>
            </div>
        </section>
        <section className='testimonials'>
            <h2>What our clients think!</h2>
            <Slider {...testimonialSettings} className='non'>
                <div className='client-card'>
                    <img src={profile} alt='client pic'/>
                    <q>Working with PUEBLO SE was a pleasure. Our PR team helped us stretch our thinking and found us new opportunities for growth. It was an amazing experience. </q>
                    <p>Jeremy Winston / Think Again</p>
                </div>
                <div className='client-card'>
                    <img src={profile_2} alt='client pic'/>
                    <q>PUEBLO SEO approach to problem-solving is creative, fun and interesting. Together, we found solutions that were totally out of the box. Thanks GUYS! </q>
                    <p>Maryanne Quincy / RM WINDOW TINT</p>
                </div>
                <div className='client-card'>
                    <img src={profile_3} alt='section pic'/>
                    <q>Best marketing firm I have ever worked with. Can’t wait for the next project. </q>
                    <p>Renata Bergsman / SOCO HEATING AND COOLING</p>
                </div>
            </Slider>
        </section>
        <section>
            <p>There are many things involved in utilizing SEO to boost your business, but if you give us a call we can set up a consultation to provide you with a complete view of our plan for you. Contact us today to learn more about utilizing best SEO practices for your business in Pueblo, CO. If you are located in Colorado springs please check out or Colorado Springs SEO company they can help with any Search engine optimization you may need.</p>
            <p>With <b>Pueblo SEO</b>, you get a team that understands the ins and outs of <b>internet marketing</b> and <b>web development</b> and will utilize all available tools to make sure that you are successful in generating sales leads so that you can grow your business. Our team is ready to put together a personalized plan for your business when you call us today and set up a free consultation. We look forward to helping you generate sales through revolutionary online marketing.</p>
        </section>
    </div>
  )
}

export default Home