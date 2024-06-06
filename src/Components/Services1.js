

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import service_1 from '../Assets/serv1.png'
import service_2 from '../Assets/serv2.png'
import { useState } from 'react';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';


export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);
  const [scrollDistance, setScrollDistance] = useState(350);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
   
  };
  if(expanded){
    setTimeout(() => {
      window.scrollBy({
        top: scrollDistance,
        behavior: 'smooth' // Smooth scrolling effect
      });
    }, 500);
  }
  const [showasic_data,setShowasic_data]=useState(false)
  const [showPhysical_data,setPhysical_data]=useState(false)
  const [showMixed_data,setMixed_data]=useState(false)
  const [showDesign_data,setDesign_data]=useState(false)
  const showasic = (data) => {
    setShowasic_data(data === "asic");
    setPhysical_data(data === "Physical");
    setMixed_data(data === "Mixed");
    setDesign_data(data === "Design");
  };
  


  return (
    <>
    <div style={{display:"flex"}}>
    <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '53%', flexShrink: 0 }}>
          SEMICONDUCTORS
          </Typography>
          {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul style={{ display: "flex", flexDirection: "column",gap:"10px",width:"100%" }}>
                 <li onClick={()=>{showasic('asic')}}><a href="#"style={{display:"flex",alignItems:"center"}}><DoubleArrowIcon/>ASIC/IP Verification</a></li>
                 <li onClick={()=>{showasic('Physical')}}><a href="#"style={{display:"flex",alignItemsalignItems:"center"}}><DoubleArrowIcon/>Physical Design and STA</a></li>
                 <li onClick={()=>{showasic('Mixed')}}><a href="#"style={{display:"flex",alignItemsalignItems:"center"}}><DoubleArrowIcon/>Mixed Signal & Analog Layout</a></li>
                 <li onClick={()=>{showasic('Design')}}><a href="#"style={{display:"flex",alignItemsalignItems:"center"}}><DoubleArrowIcon/>Design for Test (DFT)</a></li>
               </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '53%', flexShrink: 0 }}>EMBEDDED DESIGN SERVICES</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul style={{ display: "flex", flexDirection: "column",width:"100%",gap:"10px" }}>
                   <li><a href="#"style={{display:"flex",alignItems:"center"}}><DoubleArrowIcon/>System Architecture</a></li>
                   <li><a href="#"style={{display:"flex",alignItems:"center"}}><DoubleArrowIcon/>Physical Design and STA</a></li>
                   <li><a href="#"style={{display:"flex",alignItems:"center"}}><DoubleArrowIcon/>High Speed Circuit & Board Design</a></li>
                   <li><a href="#"style={{display:"flex",alignItems:"center"}}><DoubleArrowIcon/>Firmware Development</a></li>
                   <li><a href="#"style={{display:"flex",alignItems:"center"}}><DoubleArrowIcon/>BSP and Drivers Development</a></li>
                   <li><a href="#"style={{display:"flex",alignItems:"center"}}><DoubleArrowIcon/>Product Testing & Automation</a></li>
                 </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '55%', flexShrink: 0 }}>
          AI,ML IOT & APPLICATION DEVELOPMENT
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul style={{ display: "flex", flexDirection: "column",justifyContent:"",alignItems:"",gap:"10px",backgroundColor:"",width:"100%" }}>
                   <li><a href="#" style={{display:"flex",alignItems:"center"}}><DoubleArrowIcon/>Android Application Development</a></li>
                   <li><a href="#"style={{display:"flex",alignItems:"center"}}><DoubleArrowIcon/>iOS Application Development</a></li>
                   <li><a href="#"style={{display:"flex",alignItems:"center"}}><DoubleArrowIcon/>High Speed Circuit & Board Design</a></li>
                   <li><a href="#"style={{display:"flex",alignItems:"center"}}><DoubleArrowIcon/>Cloud and Server Implementation</a></li>
                 </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <p style={{marginLeft:'3rem',marginTop:"-1rem",width:"50%"}}>We can offer some benefit-driven services, for example,<b> complete Physical design flow, physical verification, DFT Services GDS Generation and Soc Integration.</b> We center around the utilization of the most recent innovation in the conveyance of these services. Our group has mastery in cutting-edge technology hubs including 5nm, 7nm, 10nm, 14nm, 20nm, 22nm, 28nm, 45nm and 65nm, and has a wide scope of space aptitude in territories including High-Speed Processors, AI, 5G Modem, wireless, networking, processors, and connectivity. Adroitec has been able to effectively deliver multi-million gate SoCs in advanced technology hubs. With increased demand in the personal devices market, digital circuit design becomes time-sensitive. Our group completely understands the urgency and time to market in this technology field. <br/>Our team has experience in providing solutions for various sectors like automobile, networking, mobile, IOT, AI, microprocessors, multimedia, and cloud computing. <br/>Our strategic account management and results-based service delivery models are designed for client success.</p>
    </div>
    <div style={{ display:( showasic_data && expanded === 'panel1')?"block":"none",width:"100%",backgroundColor:"",height:"100%",marginTop:"2rem",padding:"1rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
      <h3>ASIC/IP Verification</h3>
      <p>We have the one of the most grounded group in DV. Our group can execute check without any preparation of complex SoC's and IP's by utilizing most recent approaches, for example, SV-UVM, UPF and meeting key KPI, for example, 100% practical and code inclusion. We additionally give silicon demonstrated VIP to most recent IP's and give source code and aftersales backing to our clients.</p>
      <div style={{display:"flex",flexDirection:""}}><ol style={{display:"flex",flexDirection:"column"}}>
  <li>Advanced IP & SoC Verification</li>
  <li>SV-UVM Based Constrained - Random Verification</li>
  <li>Verification Plan, Environment, Test Bench Development</li>
  <li>Low Power Verification</li>
  <li>Gate Level simulation</li>
  <li>Assertion based Formal Verification</li>
  <li>VIP Development and Integration</li>
  <li>Palladium, Zebu & Veloce based Validation</li>
  <li>FinFET Memory design</li>
  <li>Expertise down to 20nm</li>
  <li>Post layout parasitic extraction</li>
</ol> 
<img src={service_1} width='50%'/>

</div>
</div>
<div style={{ display:(showPhysical_data && expanded === 'panel1')?"block":"none",width:"100%",backgroundColor:"",height:"100%",marginTop:"2rem",padding:"1rem",borderRadius:"10px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>

<h3>Physical Design and Verification/STA Services</h3>
<div style={{display:"flex",flexDirection:""}}>
  <ol style={{display:"flex",flexDirection:"column",margin:"1rem"}}>
  <li>Floor planning, placement optimization</li>
  <li>Power planning</li>
  <li>CTS (Clock Tree Synthesis)</li>
  <li>Place and Route</li>
  <li>Layout verification</li>
  <li>Synthesis, Timing constraints, Pre-Route STA (Static Timing Analysis)</li>
  <li>CTS (Clock Tree Synthesis), PnR (Place and Route), STA (Static Timing Analysis), RV (Routing Verification)</li>
  <li>Physical Verification and TAPE OUT</li>
  <li>Expertise technology nodes 5nm, 7nm, 16nm, 28nm, 40nm, 65nm</li>
</ol>
<img src={service_2} width='45%'/>
</div>
</div>
<div style={{ display:(showMixed_data && expanded === 'panel1')?"block":"none",width:"100%",backgroundColor:"",height:"100%",marginTop:"2rem",padding:"1rem",borderRadius:"10px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>

<h3>Analog and Mixed Signal Layout</h3>
<div style={{display:"flex",flexDirection:""}}>
  <ol style={{display:"flex",flexDirection:"column",margin:"1rem"}}>
  <li>High speed SerDes and WLAN</li>
  <li>Power expertise in LDO, Buck, Boost and Charge pumps</li>
  <li>Sigma Delta ADC, DAC</li>
  <li>Block level VCO, PLL, LDO, Bandgap design</li>
  <li>FinFET Memory design</li>
  <li>Expertise down to 20nm</li>
  <li>Post layout parasitic extraction</li>
</ol>

{/* <img src={service_2} width='45%'/> */}
</div>
</div>
<div style={{ display:(showDesign_data && expanded === 'panel1')?"block":"none",width:"100%",backgroundColor:"",height:"100%",marginTop:"2rem",padding:"1rem",borderRadius:"10px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>

<h3>DFT Services</h3>
<div style={{display:"flex",flexDirection:""}}>
  <ol style={{display:"flex",flexDirection:"column",margin:"1rem"}}>
  <li>Scan insertion, ATPG coverage analysis, Transition delay test coverage analysis</li>
  <li>RTL and gate level simulation of scan and MBIST test vectors</li>
  <li>SoC, Subsystem, IP level timing analysis</li>
  <li>Methodology development for timing closure</li>
  <li>Customized timing check for different IPs, Interfaces</li>
</ol>


{/* <img src={service_2} width='45%'/> */}
</div>
</div>

{/* ==================2nd phase services=================  */}
<div style={{ display:expanded === 'panel2'?"block":"none",width:"100%",backgroundColor:"",height:"100%",marginTop:"2rem",padding:"1rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
      <h3>Embedded Software</h3>
      <p>Embedded Software
The demand for applications and services grows every day. Every day on board there are more and more applications, which means that the need for advanced knowledge about the software becomes irresistible. At Adroitec, we have a dedicated software team built up with extensive experience in offering services in this area, our experts are well trained and well-equipped with skills necessary to deliver excellent programming solutions.</p>
      <p>We have the one of the most grounded group in DV. Our group can execute check without any preparation of complex SoC's and IP's by utilizing most recent approaches, for example, SV-UVM, UPF and meeting key KPI, for example, 100% practical and code inclusion. We additionally give silicon demonstrated VIP to most recent IP's and give source code and aftersales backing to our clients.</p>
      <div style={{display:"flex",flexDirection:""}}><ol style={{display:"flex",flexDirection:"column"}}>
  <li>Advanced IP & SoC Verification</li>
  <li>SV-UVM Based Constrained - Random Verification</li>
  <li>Verification Plan, Environment, Test Bench Development</li>
  <li>Low Power Verification</li>
  <li>Gate Level simulation</li>
  <li>Assertion based Formal Verification</li>
  <li>VIP Development and Integration</li>
  <li>Palladium, Zebu & Veloce based Validation</li>
  <li>FinFET Memory design</li>
  <li>Expertise down to 20nm</li>
  <li>Post layout parasitic extraction</li>
</ol> 
<img src={service_1} width='50%'/>

</div>
</div>

{/* ============3rd phase services ============ */}
<div style={{ display:expanded === 'panel3'?"block":"none",width:"100%",backgroundColor:"",height:"100%",marginTop:"2rem",padding:"1rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
      <h3>Internet of Things (IOT)</h3>
      <p>With the emergence of the Internet of Things (IoT), there's a new opportunity to embed intelligence into everyday physical objects. At Adroitec, we're building a platform that enables businesses and consumers to seamlessly integrate their physical and digital worlds. Our technology solution has a broad range of applications - from retail environments to industrial automation, healthcare, and more. We offer products that allow companies of all sizes to ensure their physical and digital worlds are fully integrated, accelerating growth and efficiency. Our solutions are tailored to fit customers' specific needs, offering unparalleled support on all platforms.</p>
      <p>Internet of Things (IoT) design is now becoming a crucial part of service delivery for companies looking to gain the competitive edge in the market. The emergence of IoT solutions presents a tremendous opportunity for organizations to gain better insight into their operations, optimize performance, and show more savings than ever before.</p>
      <p>IOT is the future. One of the ways in which this will be realized is through wireless technology.</p>
      <p>IOT Services is a leading provider for IoT connectivity services. We offer wide variety of wireless and wired SoCs and transceivers for both low power (PAN to LPWAN) and high power (WiFi to 5G) applications. These SoCs are ultra-small, low-power, low-cost, easy to integrate with existing systems, and capable of managing high data rates with long battery life.</p>
      <p>Robust solutions for motor control, protection, and power management and battery management complete the comprehensive coverage offered by our group’s IOT Services</p>
      <p>We specialize in product design, manufacturing, and automation to help our customers launch new products. If you're looking for a partner to help, bring your idea to life, contact us today.</p>
      <p>We take in your ideas and turn them into reality. We can help you make your idea a reality by making the electronic design, automating the process, and building it into a prototype. We can also help you with branding, marketing, and any other aspect of the business.</p>
      <p>We have the one of the most grounded group in DV. Our group can execute check without any preparation of complex SoC's and IP's by utilizing most recent approaches, for example, SV-UVM, UPF and meeting key KPI, for example, 100% practical and code inclusion. We additionally give silicon demonstrated VIP to most recent IP's and give source code and aftersales backing to our clients.</p>
      <div style={{display:"flex",flexDirection:""}}><ol style={{display:"flex",flexDirection:"column"}}>
  <li>Advanced IP & SoC Verification</li>
  <li>SV-UVM Based Constrained - Random Verification</li>
  <li>Verification Plan, Environment, Test Bench Development</li>
  <li>Low Power Verification</li>
  <li>Gate Level simulation</li>
  <li>Assertion based Formal Verification</li>
  <li>VIP Development and Integration</li>
  <li>Palladium, Zebu & Veloce based Validation</li>
  <li>FinFET Memory design</li>
  <li>Expertise down to 20nm</li>
  <li>Post layout parasitic extraction</li>
</ol> 
<img src={service_1} width='50%'/>

</div>
</div>

    </>
  );
}