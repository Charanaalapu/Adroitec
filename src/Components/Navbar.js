import * as React from 'react';
import logo from '../Assets/ATS-3-11-TRSS.png';
import './NavBar.css';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ResponsiveAppBar({name ,role}) {
  console.log(name)
  let pages=[]
  if (role ==='admin'){
    pages = ['Home', 'Contact'];
  }else {
    // pages = ['Home', 'Message', 'Contact','Upload Login folder', 'Create User'];
    pages = ['Home', 'About', 'Technologies','career', 'Contact Us'];
  }

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
    <nav className="navv fixed-top">
      <div className="icon">
      <img src={logo} className='logo' alt="Logo" />
        {/* <h3>Covid19</h3> */}
      </div>
      <a href="#" className="togglebutton" onClick={handleToggle}>
        <span className="lines"></span>
        <span className="lines"></span>
        <span className="lines"></span>
      </a>
      <div className={isActive ? 'navbar-links active' : 'navbar-links'}>
        <ul>
          <li><a href="Adroitec" className="a" style={{color:name ==='Home' ? "#0ac775" :""}}>Home<span className="line"></span></a></li>
          <li><a href="about" className="a" style={{color:name ==='About' ? "#0ac775" :""}}>About us<span className="line"></span></a></li>
          <li ><a href="services" className="a" style={{color:name ==='Services' ? "#0ac775" :""}}>Services<span className="line"></span></a></li>
          <li><a href="business_model" className="a" style={{color:name ==='BusinessModel' ? "#0ac775" :""}}>Business Model<span className="line"></span></a></li>
          <li><a href="career" className="a" style={{color:name ==='Career' ? "#0ac775" :""}}>Career<span className="line"></span></a></li>
          <li><a href="contact_us" className="a" style={{color:name ==='Contact_Us' ? "#0ac775" :""}}>Contact us<span className="line"></span></a></li>
          {/* <li className='hide'><a href="" className="a"><GridViewIcon style={{marginTop:"5px"}}/></a></li> */}
        </ul>
      </div>
    </nav>
    </>

  );
}

export default ResponsiveAppBar;

