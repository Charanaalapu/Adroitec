import React, { useState } from 'react';
import './Footer.css';
import logo from '../Assets/newlogo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PinDropRoundedIcon from '@mui/icons-material/PinDropRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import Services from './Services';

const Footer = () => {
  const [fotdata, setFotdata] = useState('');

  const handleClick = (payload) => {
    localStorage.setItem('service',payload)
    // Render the Services component and pass the data as props
    // For example, you can use React Router or any other routing library
    // or simply render the component directly here with props
    return <Services />;
  };

  return (
    <>
      <div className='footer' style={{ width: "100%", backgroundColor: "#233142", height: "700px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <hr style={{ border: "1px solid grey", width: "auto", marginTop: "5rem" }} />

        <div className='footer_div1' style={{ bottom: "0", width: "auto", height: "450px", marginLeft: "3rem", paddingTop: "", marginRight: "3rem", backgroundColor: "", color: "white", display: "flex", gap: "2rem", justifyContent: "" }}>

          <div className='logo_foot_div' style={{ width: "500px", backgroundColor: "", paddingRight: "1rem" }}>
            <img src={logo} style={{ color: "white", width: "65%" }} className='logo' alt="Logo" />
            <p id='p1' style={{fontSize:"16px"}}>Adroitec Systems is a premier provider of technology services, business consulting, and software solutions for small to large-sized businesses. Founded in 2017, Adroitec Systems has enabled companies of all sizes to grow their businesses through our broad range of technology services, business consulting, and software solutions.</p>
            <div className='icons' style={{ display: "flex", gap: "1rem" }}>
              <FacebookIcon className='footer_icons' style={{ height: "60px", width: "35px", backgroundColor: "" }} />
              <InstagramIcon className='footer_icons' style={{ height: "60px", width: "35px", backgroundColor: "" }} />
              <TwitterIcon className='footer_icons' style={{ height: "60px", width: "35px", backgroundColor: "" }} />
              <LinkedInIcon className='footer_icons' style={{ height: "60px", width: "35px", backgroundColor: "" }} />
            </div>
          </div>
          <div className='logo_foot_div' style={{ width: "400px", backgroundColor: "" }}>
            <p >Our Services</p>
            <hr style={{ width: "auto", border: "1px solid grey" }} />
            <div className='links'  style={{ display: "flex", flexDirection: "column", gap: "1.5rem", color: "white" }}>
              <a href="services" className='footerLinks'  style={{ color: "white" }} onClick={() => handleClick("Semiconductors")}>Semiconductors</a>
              <a href="services" className='footerLinks' style={{ color: "white" }} onClick={() => handleClick("Embedded")}>Embedded Design Services</a>
              <a href="services" className='footerLinks' style={{ color: "white" }} onClick={() => handleClick("AI")}>AI, ML IOT & Application Development</a>
            </div>
          </div>
          <div className='logo_foot_div' style={{ width: "300px", backgroundColor: "" }}>
            <div>
              <p >Useful Links</p>
              <hr style={{ width: "auto", border: "1px solid grey" }} />
              <div className='links' style={{ display: "flex", flexDirection: "column", gap: "0.5rem", color: "white" }}>
                <a href="about" className='footerLinks' style={{ color: "white" }}>About Us</a>
                <a href="contact_us" className='footerLinks' style={{ color: "white" }}>Contact Us</a>
                <a href="business_model" className='footerLinks' style={{ color: "white" }}>Business Model</a>
                <a href="career" className='footerLinks' style={{ color: "white" }}>Career</a>
                <a href="#" className='footerLinks' style={{ color: "white" }}>Privacy Policy</a>
                <a href="#" className='footerLinks' style={{ color: "white" }}>Terms & Conditions</a>
              </div>
            </div>
          </div>
          <div className='logo_foot_div' style={{ width: "400px", backgroundColor: "" }}>
            <p className='footer_p'>Contact Info</p>
            <hr style={{ width: "auto", border: "1px solid grey" }} />
            <div className='links' style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "white" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}><PhoneInTalkRoundedIcon /> Phone </div>
              +91 XXXXXXXXXX
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}><EmailRoundedIcon /> Email</div>
              <a href="info@eximiustech.com" className='footerLinks' style={{ color: "white" }}>info@eximiustech.com</a>
              {/* info@eximiustech.com */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}><PinDropRoundedIcon /> Location</div>
              Eternal Samyuktha, Level-3, Block-A, Madhapur, Hi-Techcity, Hyderabad-500081
            </div>
          </div>
        </div>
        <hr className='last_hr' style={{ border: "1px solid grey", width: "auto", marginTop: "0rem" }} />
        <p className='copyrights' style={{ color: "white", marginLeft: "3rem" }}>Copyrights © 2024 All rights reserved-adroitec</p>

      </div>
    </>
  )
}
export default Footer;
