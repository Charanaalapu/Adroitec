import React from 'react'
import Navbar from './Navbar'

const Services = () => {
  return (
    <>
    <Navbar name='Services' />
    <div style={{height:"100%",padding:"1rem",backgroundColor:"white",color:"black",backgrxound:"linear-gradient(180deg, rgba(124,218,106,1) 0%, rgba(66,122,38,1) 95%)"}}>
    <h1 style={{color:""}}>Services</h1><br/>
    <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
    <div style={{display:"flex"}}>
    <h3>Technologies→Semiconductors→</h3>
    <ul>
      <li>ASIC/IP Verification</li>
      <li>Physical Design and STA</li>
      <li>Mixed Signal & Analog Layout</li>
      <li>Design for Test (DFT)</li>
    </ul>
    </div>
    <div style={{display:"flex"}}>
    <h3>EMBEDDED DESIGN SERVICES</h3>
    <ul>
      <li>System Architecture</li>
      <li>Physical Design and STA</li>
      <li>High Speed Circuit & Board Design</li>
      <li>Firmware Development</li>
      <li>BSP and Drivers Development</li>
      <li>Product Testing & Automation</li>
    </ul>

    </div>
    <div style={{display:"flex"}}>
    <h3>AI,ML  IOT & APPLICATION DEVELOPMENT</h3>
    <ul>
      <li>Android Application Development</li>
      <li>iOS Application Development</li>
      <li>High Speed Circuit & Board Design</li>
      <li>Cloud and Server Implementation</li>
    </ul>

    </div>
    <p>We can offer some benefit driven services, for example, complete Physical design flow, physical verification, DFT Services GDS Generation and Soc Integration. We center around the utilization of the most recent innovation in the conveyance of these services. Our group has mastery in cutting edge innovation hubs including 5nm,7nm,10nm,14nm,20nm, 22nm, 28nm, 45nm and 65nm, and has wide scope of space aptitude in territories including High Speed Processors, AI, 5G Modem, remote, systems administration, processors, and availability. Adroitec has able to effectively deliverable of a few multi-million gate SoCs in cutting edge innovation hubs. With expanded demand in close to home gadgets market, advanced circuit design amazingly becomes time delicate. Our group totally understands the direness and time to showcase in this innovation field.
<br/>Our team has experience in providing solutions for various sectors like automobile, networking, mobile, IOT, AI, microprocessors, multimedia, and cloud computing.
                 <br/>Our strategic account management and results-based service delivery models are designed for client success.</p>
    </div>
    </div>
    


    </>
  )
}

export default Services