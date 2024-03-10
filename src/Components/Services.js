import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Services.css';

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
      <Navbar name='Services' /><br/><br/><br/><br/>
      <div style={{ height: "100%", padding: "1rem", backgroundColor: "white", color: "black" }}>
        <h1 style={{ color: "" }}>Services</h1><br/>
        <div style={{ display: "flex" }}>
          <h3
            onClick={() => setShowTechnologies(!showTechnologies)}
            style={{ cursor: "pointer", color: showTechnologies ? "green" : "black" }}
            className="active"
          >
            Technologies
          </h3>
        </div>
        <div style={{ marginLeft: "10rem" }}>
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
        </div>
        <p>We can offer some benefit-driven services, for example, complete Physical design flow, physical verification, DFT Services GDS Generation and Soc Integration. We center around the utilization of the most recent innovation in the conveyance of these services. Our group has mastery in cutting-edge technology hubs including 5nm, 7nm, 10nm, 14nm, 20nm, 22nm, 28nm, 45nm and 65nm, and has a wide scope of space aptitude in territories including High-Speed Processors, AI, 5G Modem, wireless, networking, processors, and connectivity. Adroitec has been able to effectively deliver multi-million gate SoCs in advanced technology hubs. With increased demand in the personal devices market, digital circuit design becomes time-sensitive. Our group completely understands the urgency and time to market in this technology field. <br/>Our team has experience in providing solutions for various sectors like automobile, networking, mobile, IOT, AI, microprocessors, multimedia, and cloud computing. <br/>Our strategic account management and results-based service delivery models are designed for client success.</p>
      </div>
    </>
  );
};

export default Services;
