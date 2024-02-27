import React from 'react'
import Navbar from './Navbar'
import mission from '../Assets/mission.jpg';
import vision from '../Assets/vision.jpg';
import values_ethics from '../Assets/values&ethics.jpg';
import stratagy from '../Assets/strategic management.jpeg';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import MemoryIcon from '@mui/icons-material/Memory';
import './Home.css'
const Home = () => {
  return (
    <>
    {/* <div>
      <h5>about company</h5>
    </div> */}
    <div className='topcontainer1'>
      <div className='left'>
          <img src={mission} width='100%' alt='ji' style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} />
        <div >
          <h3><span style={{color:"#0ac775"}}>Our </span> Mission</h3>
          <p>Our mission is to become one of the most highly regarded incredible next-generation and VLSI outsourcing services by partnering to drive innovation growth and shared success.</p>
        
          </div>
      </div>
      <div  className='right'>
          <img src={vision} width='100%'height="200px" alt='ji' style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} />
      <div >
          <h3><span style={{color:"#0ac775"}}>Our </span> vision</h3>
          <p>Our vision is to strive for success for ourselves and for our customers with passion and strive to continually improve the way we do this.</p>
        
          </div>
       
        </div>
      </div><br/><br/> <br/>
      <div className='cont2'>
        <h3 align='center'><u><span style={{color:"#0ac775",}}>Our </span>Approach/Culture</u></h3>
        <div align='center'>
        <p>We believe in the collective intelligence of people and the power of combining diverse perspectives to generate new ideas. Our approach is to work closely with clients to listen to their needs, define projects that meet their objectives, and then develop solutions that are tailored to them. We understand that each client has unique needs, and we aim to create personalized solutions that deliver measurable business value.</p>
      <p>The Adroitec’s corporate culture is based on the following pillars:</p>
      <p>1. Customer focused mentality</p>
      <p>2. Commitment to excellence</p>
      <p>3. Integrity at all levels</p>
      <p>4. Innovation and creativity</p>
      </div>
      </div><br/> <br/>

      <div className='cont3'>
        <div className='cont3-left'>
          <h3 align='center'><u><span style={{color:"#0ac775",}}>Our </span> & Ethics</u></h3>
          <p>We strive to be a company that is mindful of how our actions impact the world. We want to be good people and do good work.</p>
          <p>We believe in being honest with ourselves and others. We try to operate with transparency, authenticity, and humility.</p>
          <p>We work hard for our clients, but we also take care of ourselves. We don't work long hours just for the sake of it - if we need a break, we take it. And if someone needs help or support, we're there for them.</p>
          

        </div>

        <div className='cont3-right'>
          <h3 align='center'><u><span style={{color:"#0ac775",}}>Our </span>Strategic Management</u></h3>
          <p>Strategic management is a process of decision making with the aim of achieving organizational goals. It includes four steps:</p>
          <p>- Identifying objectives and resources</p>
          <p>- Setting policy guidelines</p>
          <p>- Applying resources</p>
          <p>- Monitoring and evaluating performance.</p>
          <p></p>

        </div>

      </div><br/>
      <div className='matter'>
        <h6 style={{color:"#8e88b8"}}>// DELIVERING INNOVATIVE SOLUTIONS GLOBALLY.</h6>
        <div style={{color:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h4 >Transforming businesses with innovation & stay ahead in market.</h4>
        <p>Trusted Technology Partner.</p>
        <p>Agile & Scalable Solutions.</p>
        <p>Comprehensive Stack from Chip Design to Digital Applications.</p>
        </div>
        <div className='cards_mater'>
        <div className='cm'>
          <h4 style={{color:""}}>Silicon Engineering</h4>
          <p>Adroitec Systems executes chip design and semiconductor projects from spec to production silicon or from RTL2GDSII. Our Silicon Engineering team has successfully taped out many IPs, subsystems and chips. Unique and expertise silicon CAD tool knowledge and domain expertise helps enhance the quality and time to market. The expertise makes it easier for SmartSoC to collaborate at any of the stage during a product development.</p>
        </div>
        <div className='cm'>
          <h4 style={{color:""}}>Embedded Software</h4>
          <p>Adroitec Systems provides support from end-to-end during embedded development, right from the conceptualization to conformance testing. With experience in various hardware platforms and processor architectures as well as real time OS platforms, we enable embedded system development involving hardware design, software development and hardware/software integration.</p>
        </div>
        <div className='cm'>
          <h4 style={{color:""}}>Automotive Engineering Services & Solutions</h4>
          <p>With the disruption in Automotive domain across the globe, Connected Vehicles and Integration of Computer Vision, Machine Learning(ML) & Deep learning(DL), Automotive Market is increasingly designed to incorporate the real-time dimension, with accuracy, time-to-market, quality as its critical coefficients.</p>
        </div>
       
        </div>
      </div><br/><br/>
      <div className='solutions'>
        <h5 style={{color:"#0ac775",}}>//solutions</h5>
        <h1 style={{fontWeight:"700"}}>Performance-optimized, comprehensive & cost-effective <br/>solutions with faster TTM</h1>
        <div className='cards1'>
          <div className='cards'>
            <h5 align='center'>RTL design</h5>
            <p>Our highly qualified Front-End Engineers have been successfully collaborating with architectural teams to take various projects from Spec to Netlist.</p>
          </div>
          <div className='cards'>
            <h5 align='center'>RTL design</h5>
            <p>Our highly qualified Front-End Engineers have been successfully collaborating with architectural teams to take various projects from Spec to Netlist.</p>
          </div>
          <div className='cards'>
            <h5 align='center'>RTL design</h5>
            <p>Our highly qualified Front-End Engineers have been successfully collaborating with architectural teams to take various projects from Spec to Netlist.</p>
          </div>
      
          </div>
          <div className='cards1'>
          <div className='cards'>
            <h5 align='center'>RTL design</h5>
            <p>Our highly qualified Front-End Engineers have been successfully collaborating with architectural teams to take various projects from Spec to Netlist.</p>
          </div>
          <div className='cards'>
            <h5 align='center'>RTL design</h5>
            <p>Our highly qualified Front-End Engineers have been successfully collaborating with architectural teams to take various projects from Spec to Netlist.</p>
          </div>
          <div className='cards'>
            <h5 align='center'>RTL design</h5>
            <p>Our highly qualified Front-End Engineers have been successfully collaborating with architectural teams to take various projects from Spec to Netlist.</p>
          </div>
          

        </div>

      </div>
      <div className='overview'>
      <h3 align='center'><u><span style={{color:"#0ac775",}}>Overview </span></u></h3>
      <div>    
        <p>Semiconductors are necessary to power devices in a wide range of industries, from consumer electronics to automotive. The semiconductor market has been rapidly changing over the last few decades, and the industry is now in a state of rapid growth. To support this growth, we provide semiconductor services that ensure your business is set up for success in this new environment.</p>
        <p>Adroitec Systems is a leading global semiconductor design services company, helping customers achieve their objectives in cost, time, and quality. We provide end-to-end ASIC design services to customers globally in different domains in Semiconductors, Embedded and Software. Our success can be attributed to our deep domain expertise, critical thinking and problem-solving capabilities, high level of workmanship and a relentless pursuit of excellence.</p>
        <p>Adroitec is a technology company that provides its clients with tools to integrate their physical and digital worlds. We develop comprehensive technology solutions that enable our clients to manage both the online and offline customer experience more effectively.</p>
        <p>We are a creative design agency that has helped design, develop, and market multiple products for companies in different industries. Producing high-quality work is our priority, and we design our products with reliability, efficiency, and usability in mind. Our goal is to build a team of talented individuals who share our passion for excellence.</p>
        <p>We offer our clients a partner which is large enough to be scalable but small enough to be flexible to meet client’s project needs and business demands. We aim to become our client’s service partner of choice. We build our relationships on quality, performance, and trust. We believe in our in-depth knowledge, resource pool and delivery capabilities. </p>
        <p>We are an experienced team of engineers and developers that specializes in electronics design and automation, platform design, embedded technologies, data acquisition systems, programmable logic controllers (PLC), industrial automation systems, control systems programming, machine vision systems, networked industrial environments (including SCADA), and more. Our services include engineering projects ranging from one-off designs to turnkey system integration.</p>
      </div>
      </div>

      
    </>
  )
}

export default Home