import { Routes, Route, HashRouter } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import About from './Components/About';
import Career from './Components/Career';
import Services from './Components/Services';
import BusinessModel from './Components/BusinessModel';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <>
    <HashRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/services" element={<Services />} />
        <Route path="/business_model" element={<BusinessModel />} />
        <Route path="/contact_us" element={<ContactUs />} />
      </Routes>

      <Footer />
    </div>
    </HashRouter>

    </>
  );
}

export default App;
