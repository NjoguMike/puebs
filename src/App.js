import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:serviceId' element={<Services />}>
            <Route path='seo' element={<Services />} />
            <Route path='web_design' element={<Services />} />
            <Route path='local_map_listing' element={<Services />} />
            <Route path='social_media_ads' element={<Services />} />
            <Route path='google_ads' element={<Services />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
