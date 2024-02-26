import React from 'react'
import Navbar from './Navbar'
import mission from '../Assets/mission.jpg';
import vision from '../Assets/vision.jpg';
import values_ethics from '../Assets/values&ethics.jpg';
import stratagy from '../Assets/strategic management.jpeg';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Home = () => {
  return (
    <>
    <div style={{display:"flex",minWidth:"100vh",justifyContent:"center",gap:"6rem",bccccackgroundColor:"rgb(24, 24, 24,0.6)"}}>
      <div className='cards' style={{height:"450px",width:"500px",borderRadius:"10px",backgroundColor:"white",color:"black",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
        {/* <div style={{height:"100%",width:"500px"}}> */}
          <img src={mission} width='100%' alt='ji' style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} />
        {/* </div> */}
        <div style={{height:"100%",width:"500px",padding:"20px"}}>
          <h3>Our Mission</h3>
          <p>Our mission is to become one of the most highly regarded incredible next-generation and VLSI outsourcing services by partnering to drive innovation growth and shared success.</p>
        
          </div>
      </div><hr/>
      <div className='cards' style={{height:"450px",width:"500px",borderRadius:"10px",display:"",backgroundColor:"white",color:"black",justifyContent:"center",gap:"5rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
      {/* <div style={{height:"100%",width:"500px",backgroundColor:""}}> */}
          <img src={vision} width='100%'height="270px" alt='ji' style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} />
        {/* </div> */}
      <div style={{height:"100%",width:"500px",padding:"20px",marginTop:"1rem"}}>
          <h3>Our vision</h3>
          <p>Our vision is to strive for success for ourselves and for our customers with passion and strive to continually improve the way we do this.</p>
        
          </div>
       
        </div>
      </div>
      <hr/><br/>
      <h2 align="center">Our Approach/Culture</h2>

      <div style={{marginLeft:"6rem",marginRight:"6rem",padding:"3rem"}}>
        <p >
        We believe in the collective intelligence of people and the power of combining diverse perspectives to generate new ideas. Our approach is to work closely with clients to listen to their needs, define projects that meet their objectives, and then develop solutions that are tailored to them. We understand that each client has unique needs, and we aim to create personalized solutions that deliver measurable business value
        </p>
        
        <p>The Adroitec’s corporate culture is based on the following pillars:</p>
        <ol>
<li>Customer focused mentality</li>
<li>Commitment to excellence</li>
<li>Integrity at all levels</li>
<li>Innovation and creativity</li>
        </ol>
      </div>
      <br/>
      <div style={{backgroundColor:"",paddingTop:"2rem",paddingBottom:"2rem"}}>
      <div style={{width:"100%",backgroundColor:"",display:"flex",justifyContent:"center",alignItems:"center",gap:""}}>
      <div style={{height:"450px",width:"",borderRadius:"10px",backgroundColor:"rgb(204, 204, 204,0.2)",color:"black",display:"flex",flexDirection:"",alignItems:"center",justifyContent:"center",gap:"10rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
        {/* <div style={{height:"100%",width:"500px"}}> */}
          <img src={values_ethics} width='45%' alt='ji' style={{borderRadius:"10px" }} />
        {/* </div> */}
        <div style={{height:"75%",borderRadius:"10px",width:"500px",padding:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
          <h3 style={{alignSelf:"flex-start"}}>Our Values & Ethics :</h3>
          <p>We strive to be a company that is mindful of how our actions impact the world. We want to be good people and do good work.</p>
        <p>We believe in being honest with ourselves and others. We try to operate with transparency, authenticity, and humility</p>
         <p>We work hard for our clients, but we also take care of ourselves. We don't work long hours just for the sake of it - if we need a break, we take it. And if someone needs help or support, we're there for them</p> </div>
      </div><hr/>
      </div>
      <br/>


      <div style={{width:"100%",backgroundColor:"",display:"flex",justifyContent:"center",alignItems:"center",gap:"",boxShsadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
      <div style={{height:"450px",width:"85%",borderRadius:"10px",backgroundColor:"rgb(204, 204, 204,0.2)",display:"flex",flexDirection:"",alignItems:"center",justifyContent:"center",gap:"10rem",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
        <div style={{height:"75%",borderRadius:"10px",width:"500px",padding:"20px",color:"black",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
        <h3 style={{alignSelf:"center"}}>Strategic Management</h3>
          <p style={{alignSelf:"center"}}>Our vision is to strive for success for ourselves and for our customers with passion and strive to continually improve the way we do this.</p>
        <div>
          <p>- Identifying objectives and resources</p>
        <p>- Setting policy guidelines</p>
        <p>- Setting policy guidelines</p>
        <p>- Monitoring and evaluating performance.</p>
        </div>
          </div>
          <img src={stratagy} width='40%' alt='ji' style={{borderRadius:"10px" }} />

      </div><hr/>
      </div>
      </div>
     




















      <div style={{margin:"3rem"}}>
      <h1 align="center">Overview</h1><hr/>
      <p>
        Semiconductors are necessary to power devices in a wide range of industries, from consumer electronics to automotive. The semiconductor market has been rapidly changing over the last few decades, and the industry is now in a state of rapid growth. To support this growth, we provide semiconductor services that ensure your business is set up for success in this new environment.
        Adroitec Systems is a leading global semiconductor design services company, helping customers achieve their objectives in cost, time, and quality. We provide end-to-end ASIC design services to customers globally in different domains in Semiconductors, Embedded and Software. Our success can be attributed to our deep domain expertise, critical thinking and problem-solving capabilities, high level of workmanship and a relentless pursuit of excellence.
        Adroitec is a technology company that provides its clients with tools to integrate their physical and digital worlds. We develop comprehensive technology solutions that enable our clients to manage both the online and offline customer experience more effectively.
        We are a creative design agency that has helped design, develop, and market multiple products for companies in different industries. Producing high-quality work is our priority, and we design our products with reliability, efficiency, and usability in mind. Our goal is to build a team of talented individuals who share our passion for excellence.
        We offer our clients a partner which is large enough to be scalable but small enough to be flexible to meet client’s project needs and business demands. We aim to become our client’s service partner of choice. We build our relationships on quality, performance, and trust. We believe in our in-depth knowledge, resource pool and delivery capabilities.
        We are an experienced team of engineers and developers that specializes in electronics design and automation, platform design, embedded technologies, data acquisition systems, programmable logic controllers (PLC), industrial automation systems, control systems programming, machine vision systems, networked industrial environments (including SCADA), and more. Our services include engineering projects ranging from one-off designs to turnkey system integration.
      </p>
      <p>Adroitec Systems is a leading global semiconductor design services company, helping customers achieve their objectives in cost, time, and quality. We provide end-to-end ASIC design services to customers globally in different domains in Semiconductors, Embedded and Software. Our success can be attributed to our deep domain expertise, critical thinking and problem-solving capabilities, high level of workmanship and a relentless pursuit of excellence.</p>
      <p>Adroitec is a technology company that provides its clients with tools to integrate their physical and digital worlds. We develop comprehensive technology solutions that enable our clients to manage both the online and offline customer experience more effectively.</p>
      <p>We are a creative design agency that has helped design, develop, and market multiple products for companies in different industries. Producing high-quality work is our priority, and we design our products with reliability, efficiency, and usability in mind. Our goal is to build a team of talented individuals who share our passion for excellence.</p>
      <p>We offer our clients a partner which is large enough to be scalable but small enough to be flexible to meet client’s project needs and business demands. We aim to become our client’s service partner of choice. We build our relationships on quality, performance, and trust. We believe in our in-depth knowledge, resource pool and delivery capabilities. </p>
      <p>We are an experienced team of engineers and developers that specializes in electronics design and automation, platform design, embedded technologies, data acquisition systems, programmable logic controllers (PLC), industrial automation systems, control systems programming, machine vision systems, networked industrial environments (including SCADA), and more. Our services include engineering projects ranging from one-off designs to turnkey system integration.
        </p>
        </div>
    </>
  )
}

export default Home