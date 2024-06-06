import React, { useState } from 'react'
import Navbar from './Navbar'
import about from '../Assets/about.jpg'
import './About.css'
const BusinessModel = () => {
  const [scrollDistance, setScrollDistance] = useState(400);

  const [show,setshow]=useState(false)
  const handleshow =()=>{
    setshow(!show)

    setTimeout(() => {
      window.scrollBy({
        top: scrollDistance,
        behavior: 'smooth' // Smooth scrolling effect
      });
    }, 500); // 1000 milliseconds delay (adjust as needed)
    

  }
  return (
    <>
    <Navbar name='BusinessModel'/><br/><br/>
    <div style={{height:"140%",padding:"1rem",padding:"3rem",backgroundColor:"",color:"black",backgrousnd:"linear-gradient(180deg, rgba(124,218,106,1) 0%, rgba(66,122,38,1) 95%)"}}>
    <h3 ><span style={{color:"#0ac775"}}>Turn Key Solutions & ODC </span></h3>
    <div style={{display:"flex",gap:"4rem"}}>
    <div style={{width:""}}>
    <p>Adroitec Systems is a company that specializes in the implementation of ASIC design projects from GDSII specifications to the market and high-volume production.</p>
    <p>Adroitec's business model is to take on the responsibility and ownership of the project deliverables. Their expertise lies in their ability to provide a comprehensive service that is customised for each client and that is tailored to their needs.</p>
    </div>
    {/* <img src={about} alt='about' style={{borderRadius:"20px"}}/> */}
    </div><br/><br/>
    <div style={{display:"flex",gap:"4rem"}}>
    <div style={{width:"600px"}}>
    <p>Adroitec Systems specializes in the implementation of ASIC design projects from GDSII specifications to the market and high quality. In this model, Adroitec is fully responsible and ownership of the project deliverables. </p>
    <p>In other words, it is a results-based service agreement. and the schedule for the delivery of the project, while meeting the customer's quality of service requirements. Adroitec must ensure the delivery of the turnkey project within the limits of the fixed cost incurred and the fixed schedule for the project. Increased resources In general, those who did not have sufficient resources or lack specialized knowledge.</p>
    </div>
    <img src={about} width={300} alt='about' style={{borderRadius:"20px"}}/>

    </div>
    <h3><span style={{color:"#0ac775"}}>Resources Augmentation </span></h3>
    <div style={{display:"flex",gap:"4rem"}}>
    <div style={{width:"600px"}}>
    <p>Adroitec incubates a ready-made talent pool that can be implemented according to the project objectives. Our employees are trained and experienced in a variety of fields and technologies, and companies can rationally decide to increase or decrease costs to control costs and achieve their business goals.</p>
    <p>Resource Augmentation addresses the problem facing the client's project teams. In general, those who had insufficient resources or lack of expertise. Our Resource Pool is always ready to expand resource needs with specific knowledge as per customer requirements.</p>
    </div>
    <img src={about} width={300} alt='about' style={{borderRadius:"20px"}}/>
    </div>
    </div>
    </>
  )
}

export default BusinessModel