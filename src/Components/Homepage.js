import React, { useEffect, useState } from 'react'
import './Homepage.css'
import Navbar from './Navbar'
import 'jspdf-autotable';
import img1 from '../Assets/innovation1.png';
import img2 from '../Assets/cs.png';
import img3 from '../Assets/q.png';

import StraightIcon from '@mui/icons-material/Straight';
import Home from './Home';

const Homepage = () => {
  const [scrollDistance, setScrollDistance] = useState(650);

  const handleButtonClick = () => {
    // Scroll the page
    window.scrollBy({
      top: scrollDistance,
      behavior: 'smooth' // Smooth scrolling effect
    });
  };

  return (
    <>
     <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
          <div style={{ position: "relative" }}>
    <img className="d-block w-100" src={img1} alt="first slide" />
    <div className="white-overlay"></div>
  </div>
            <div className="carousel-caption  d-md-block">
              {/* <p className='animated-text'  style={{marginTop:"-20rem",marginLeft:"-35rem"}}>Incite the spark of innovation</p> */}
             <div  class="animate-charcter"> <h1 style={{fontSize:"60px"}}>"INCITE THE SPARK OF INNOVATION"</h1>
              <p className='paras_aniamtaion' style={{color:"white",fontSize:"18px"}}>"Innovation comes from creating environments where their ideas can connect"</p>
              </div>
              <br/>
  <button class="learn-more" onClick={handleButtonClick}>
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">Learn More</span>
  </button>
              {/* <p>Sample paragraph text </p> */}
              {/* <p>...</p> */}
            </div>
          </div>
          <div className="carousel-item">
          <div style={{ position: "relative" }}>
    <img className="d-block w-100" src={img2} alt="Second slide" />
    <div className="white-overlay"></div>
  </div>
            <div className="carousel-caption  d-md-block" >
              {/* <p className='animated-text' style={{marginTop:"-20rem",marginLeft:"-35rem"}}>Where the complexity meets the simplicity.</p> */}
              <div  class="animate-charcter"><h1 style={{fontSize:"60px"}}>"WHERE THE COMPLEXITY MEETS THE SIMPLICITY"</h1>
              <p className='paras_aniamtaion' style={{color:"white",fontSize:"18px"}}>"Where innovation thrives in the nexus of complexity and simplicity"</p>
              </div>
              <br/>
  <button class="learn-more" onClick={handleButtonClick}>
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">Learn More</span>
  </button>
              {/* <p>Sample paragraph text </p> */}
              {/* <p>...</p> */}
            </div>
          </div>
          <div className="carousel-item">
          <div style={{ position: "relative" }}>
    <img className="d-block w-100" src={img3} alt="third slide" />
    <div className="white-overlay"></div>
  </div>
            <div className="carousel-caption d-md-block">
              {/* <p className='animated-text'  style={{marginTop:"-20rem",marginLeft:"-35rem"}}>Quality with a cost-effective price</p> */}
              
              <div  class="animate-charcter"> <h1 style={{fontSize:"60px"}}>"QUALITY WITH A COST-EFFECTIVE PRICE"</h1>
              <p className='paras_aniamtaion' style={{color:"white",fontSize:"18px"}}>"Driving Success Through the Perfect Alignment:

People, Processes, and Technology."</p>
              </div>
              <br/>
  <button class="learn-more" onClick={handleButtonClick}>
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">Learn More</span>
  </button>
              {/* <p>Sample paragraph text </p> */}
              {/* <h1 className='animated-text'  ><span className='cc'> 03 | </span>QUALITY WITH A COST-EFFECTIVE PRICE</h1> */}
              {/* <p>...</p> */}
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" style={{ right: 0, left: 'auto', top: '70%', transform: 'translateY(-50%)' }}>
          {/* <span className="carousel-control-prev-icon" aria-hidden="true">Previous</span> */}
          {/* <StraightIcon style={{ fontSize: 40, transform: 'rotate(180deg)' }} /> */}
         <div style={{ transform: 'rotate(180deg)',display:"flex",flexDirection:"column",alignItems:"center" }}>  <StraightIcon style={{ height:"100px",backgroundColor:"",fontSize: 40 }}  />  <span style={{transform:"rotate(90deg)"}}>P R E V</span></div> 


        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" style={{ right: 0, left: 'auto', top: '40%', transform: 'translateY(-50%)' }}>
          {/* <span className="carousel-control-next-icon" aria-hidden="true">Next</span> */}
         
         <div style={{ transform: 'rotate(180deg)',display:"flex",flexDirection:"column",alignItems:"center" }}>  <span style={{transform:"rotate(90deg)"}}>N E X T</span><StraightIcon style={{transform:"rotate(180deg)", height:"100px",backgroundColor:"",fontSize: 40 }}  />  </div> 
        </a>
        <div style={{ position: "fixed", top: "0",zIndex:10, height: "80px", width: "100%", backgroundColor: "transparent", color: "white" }}>
          
          <Navbar name='Home' />
        </div>
        
        
      </div><br/>
      
      <div style={{width:""}}>
      <Home />

      </div>


      </>
  )
}

export default Homepage
