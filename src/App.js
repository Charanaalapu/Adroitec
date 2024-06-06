import './App.css';
// import Login from '../src/Components/Login'
import { Routes,Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
// import DashboardPage from './Components/DashboardPage';
// import MessageTemplate from './Components/MessageTemplate';
// import Uploadfiles from './Components/Uploadfiles';
// import MessageTemplate2 from './Components/MessageTemplate2';
// import ApprovalDashboard from './Components/ApprovalDashboard';
// import UserApprovedDash from './Components/UserApprovedDash'
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import About from './Components/About';
import Home from './Components/Home';
import Career from './Components/Career';
import Services from './Components/Services';
import BusinessModel from './Components/BusinessModel';
import ContactUs from './Components/ContactUs';
import Particles from './Components/Particles';

function App() {

  return (

    // <Router>
      <div className="App">
        <Routes>
          {/* <Route exact path="/Adroitec" element={<Homepage />}  /> */}
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/career" element={<Career />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/business_model" element={<BusinessModel />} />
          <Route exact path="/contact_us" element={<ContactUs />} />
        </Routes>
      {/* <Particles id="tsparticles" /> */}

        <Footer />
      </div>
  );
}

export default App;
