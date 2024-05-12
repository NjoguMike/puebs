import '../src/Styling/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Seo from './Pages/seo';
import WebDesign from './Pages/webdesign';
import MapsListing from './Pages/MapsListing';
import GoogleAds from './Pages/GoogleAds';
import SocialMediaAds from './Pages/SocialMediaAds';
import { useEffect, useState } from 'react';


function App() {

  const [data,setData] = useState('')

  useEffect(
    ()=>{
      fetch('../src/PageData.json')
      .then(r=>r.json())
      .then(r=>console.log(r))
      .catch(e=>console.error('File not found!', e))
    },
    []
  )

  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services data={data}/>} />
        <Route path='/services/:serviceId' element={<Services />}>
            <Route path='seo' element={<Seo />} />
            <Route path='web-design' element={<WebDesign />} />
            <Route path='local-map-listing' element={<MapsListing />} />
            <Route path='social-media-ads' element={<SocialMediaAds />} />
            <Route path='google-ads' element={<GoogleAds />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
