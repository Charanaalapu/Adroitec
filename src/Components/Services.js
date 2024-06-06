import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Services.css';
import Services1 from './Services1';
import services_banner from '../Assets/services_banner.jpg'
import service_1 from '../Assets/services_1.jpg'
const Services = () => {
  const [showTechnologies, setShowTechnologies] = useState(false);
  const [showEmbeddedDesign, setShowEmbeddedDesign] = useState(false);
  const [showSemiconductors, setShowSemiconductors] = useState(false);
  const [showAppDevelopment, setShowAppDevelopment] = useState(false);

  useEffect(() => {
    const service_is = localStorage.getItem('service');
    if (service_is === 'AI') {
      setShowTechnologies(true)
      setShowAppDevelopment(true);
    } else if (service_is === 'Embedded') {
      setShowTechnologies(true)
      setShowEmbeddedDesign(true);
    } else if (service_is === 'Semiconductors') {
      setShowTechnologies(true)
      setShowSemiconductors(true);
    }
  }, []);

  return (
    <>
      <Navbar name='Services' /><br/>
      <img src={services_banner} className='services_img' />
      <div style={{ height: "100%", padding: "3rem", backgroundColor: "white", color: "black",marginTop:"-8rem" }}>
        <h1 style={{ color: "white" }}><span style={{color:"#0ac775"}}>Our </span>Services</h1><br/>
        <div style={{ display: "flex" }}>
          <h3
            onClick={() => setShowTechnologies(!showTechnologies)}
            style={{ cursor: "pointer", color: showTechnologies ? "green" : "black",marginTop:"2rem",paddingLeft:"3rem" }}
            className="active"
          >
            Technologies
          </h3>
        </div>
        {/* <div style={{ marginLeft: "10rem" }}>
          <div style={{ display: "flex" }}>
            {showTechnologies && (
              <h3
                onClick={() => setShowSemiconductors(!showSemiconductors)}
                style={{ cursor: "pointer", color: showSemiconductors ? "blue" : "black", marginBottom: "2rem" }}
                className="active"
              >
                -> SEMICONDUCTORS
              </h3>
            )}
            {(showSemiconductors && showTechnologies) && (
              <ul style={{ display: "flex", flexDirection: "column" }}>
                <li><a href="#">ASIC/IP Verification</a></li>
                <li><a href="#">Physical Design and STA</a></li>
                <li><a href="#">Mixed Signal & Analog Layout</a></li>
                <li><a href="#">Design for Test (DFT)</a></li>
              </ul>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex" }}>
              {showTechnologies && (
                <h3
                  onClick={() => setShowEmbeddedDesign(!showEmbeddedDesign)}
                  style={{ cursor: "pointer", color: showEmbeddedDesign ? "blue" : "black" }}
                  className="active"
                >
                  -> EMBEDDED DESIGN SERVICES
                </h3>
              )}
              {(showEmbeddedDesign && showTechnologies) && (
                <ul style={{ display: "flex", flexDirection: "column" }}>
                  <li><a href="#">System Architecture</a></li>
                  <li><a href="#">Physical Design and STA</a></li>
                  <li><a href="#">High Speed Circuit & Board Design</a></li>
                  <li><a href="#">Firmware Development</a></li>
                  <li><a href="#">BSP and Drivers Development</a></li>
                  <li><a href="#">Product Testing & Automation</a></li>
                </ul>
              )}
            </div>
            <div style={{ display: "flex" }}>
              {showTechnologies && (
                <h3
                  onClick={() => setShowAppDevelopment(!showAppDevelopment)}
                  style={{ cursor: "pointer", color: showAppDevelopment ? "blue" : "black" }}
                  className="active"
                >
                  -> AI,ML IOT & APPLICATION DEVELOPMENT
                </h3>
              )}
              {(showAppDevelopment && showTechnologies) && (
                <ul style={{ display: "flex", flexDirection: "column" }}>
                  <li><a href="#">Android Application Development</a></li>
                  <li><a href="#">iOS Application Development</a></li>
                  <li><a href="#">High Speed Circuit & Board Design</a></li>
                  <li><a href="#">Cloud and Server Implementation</a></li>
                </ul>
              )}
            </div>
          </div>
        </div> */}
        <div style={{display:"",width:"100%",justifyContent:"",gap:"2rem",paddingLeft:"3rem"}}>
        <Services1/>
        {/* <div style={{height:"auto",width:"50%",backgroundColor:""}}> */}
          {/* <img src={service_1} width='60%'/> */}

        {/* </div> */}


        </div>
      </div>
    </>
  );
};

export default Services;
