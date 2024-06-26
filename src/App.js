import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Service from './Components/Service';


function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/:serviceId' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
