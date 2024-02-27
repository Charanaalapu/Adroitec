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
        <Route path="/" Component={<Homepage />} />
        <Route path="/home" Component={<Homepage />} />
        <Route path="/about" Component={<About />} />
        <Route path="/career" Component={<Career />} />
        <Route path="/services" Component={<Services />} />
        <Route path="/business_model" Component={<BusinessModel />} />
        <Route path="/contact_us" Component={<ContactUs />} />
      </Routes>

      <Footer />
    </div>
    </HashRouter>

    </>
  );
}

export default App;
