import React, { useState } from 'react'
import Navbar from './Navbar'
import about from '../Assets/about.jpg'
import './About.css'
const About = () => {
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
    <Navbar name='About'/><br/><br/>
    <div style={{height:"140%",padding:"1rem",padding:"3rem",backgroundColor:"",color:"black",backgrousnd:"linear-gradient(180deg, rgba(124,218,106,1) 0%, rgba(66,122,38,1) 95%)"}}>
    <h1 ><span style={{color:"#0ac775"}}>About </span>Us</h1>
    <div style={{display:"flex",gap:"4rem"}}>
    <div style={{width:"600px"}}>
    <p>Adroitec Systems is a premier provider of technology services, business consulting, and software solutions for small to large-sized businesses. Founded in 2017, Adroitec Systems has enabled companies of all sizes to grow their businesses through our broad range of technology services, business consulting, and software solutions. Our team of experts are committed to providing you with the best customer experience possible. We're proud to have served more clients in over 4 years and earned the trust and respect from.</p>
    <p>We are a team of dedicated, passionate, and customer-centric professionals with extensive experience in both Semiconductors and Embedded Software industry. We are committed to delivering quality work that satisfies our customers’ needs. We believe that customers are the most important stakeholder in every business due to the fact they are the ones who make it possible for any company to make money. Our customers are our partners in success. Given this, we are willing to listen to them and provide solutions aligned to their business intent.</p>
    </div>
    <img src={about} alt='about' style={{borderRadius:"20px"}}/>
    </div>
    <button className='buttonreadmore' onClick={handleshow} style={{border:"none",height:"40px",width:"100px",backgroundColor:show ? "#611866":"#0ac775",color:"white",borderRadius:"20px", transition: "background-color 0.3s ease", // Smooth transition effect
    cursor: "pointer"}}>Read more</button><br/>
    <div style={{display: show ? "block":"none"}}><br/><br/>
    <h3>Who We Are?</h3>
    <p>We are a team of Technology Professionals who are passionate about designing and delivering solutions that are innovative, progressive, and sustainable. Our goal is to not only create an environment where creativity is nurtured but also where your business faces the future with confidence, clarity, and purpose.</p>
    <h3>What We Are?</h3>
    <p>At the forefront of technologies, we are committed to deliver our full potential. We work with our clients to guide them through the complexities of technologies, solve their business challenges and bring about innovation.</p>
    <h3>What Can We Do?</h3>
    <p>We are an independent, global services company that has been focused on providing engineering services and solutions. We have a proven track record of success in delivering complex solutions and implementations of Physical Design, SoC & IP verification, Analog & Mixed Signal Layout, System Integration & Simulation, PCB Design Services and RF/Microwave/Optical Design Services. We provide full turnkey solutions to our customers from RTL design to GDS. Our solution provides complete end-to-end design tailored for clients need with focus on delivering high quality and cost-effective services.</p>
    </div>
    </div>
    </>
  )
}

export default About