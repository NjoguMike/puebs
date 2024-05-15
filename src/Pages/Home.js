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
                <p>The internet is changing everything about how we conduct business, connect with people, and even the way that we get our most basic needs met. Every commodity from housing to food to entertainment is found in the online marketplace and the world has decided that convenience is a top priority for where they spend their hard-earned money. If you are in the process of building your audience and trying to take your business to the next level, then you have to be excited about the opportunities available to market your business on the internet. Every single project we launch here at Pueblo marketing begins with a thorough, often intense planning process. We involve as many of our in-house experts as needed to ensure that your plan is sound and successful.</p>
            </div>
            <button>Read More</button>
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
            <h2>Web Development contribution to Sales</h2>
            <p>​The key to really taking over in your niche for the Pueblo, CO area is complete web development from our expert team. This is more than just creating a great website, but rather about making sure that your website and your entire online presence work cohesively to create sales leads. Our method is tried and true, and we have taken businesses to the first page of Google for relevant search terms to their business, developed great ad campaigns on Facebook and Google, and created websites that funnel those new potential customers directly to you.</p>
            <p>Call us right now and you can set up a free appointment to meet with us about the potential that our SEO web development strategy has for boosting your business. It is a risk free consultation that we are certain will give you the inspiration to take your business to the next level through top of the line internet marketing.</p>
        </section>
        <section className='testimonials'>
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
            <img src='' alt='client pic'/>
            <div>
                <h3>Facebook Ads Are Your Friend</h3>
                <p>One of the most visited sites on the entirety of the internet is Facebook. Facebook has so many users that the impact you can have on the social media juggernaut is undeniable. Unfortunately, many people waste money advertising on Facebook because they do not know how to utilize Facebook Ads to generate sales. Even though you get a presence boost from creating a Facebook Ad, if you do not have the right plan for your ad and using it to generate sales leads, it will all be for naught. Pueblo SEO will work with you to create <b>Facebook Ads in Pueblo</b>, Colorado that are properly targeted and use the analytics from those ads to generate sales for your business in the future.</p>
            </div>
        </section>
        <section>
            <p>With <b>Pueblo SEO</b>, you get a team that understands the ins and outs of <b>internet marketing</b> and <b>web development</b> and will utilize all available tools to make sure that you are successful in generating sales leads so that you can grow your business. Our team is ready to put together a personalized plan for your business when you call us today and set up a free consultation. We look forward to helping you generate sales through revolutionary online marketing.</p>
        </section>
    </div>
  )
}

export default Home