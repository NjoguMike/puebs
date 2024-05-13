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


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:serviceId' element={<Services />}>
            <Route path='seo' element={<Seo />} />
            <Route path='web_design' element={<WebDesign />} />
            <Route path='local_map_listing' element={<MapsListing />} />
            <Route path='social_media_ads' element={<SocialMediaAds />} />
            <Route path='google_ads' element={<GoogleAds />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
