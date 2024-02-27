import React from 'react'
import Navbar from './Navbar'

const ContactUs = () => {
  return (
    <>
    <Navbar name='Contact Us' />
    <br/><br/><br/><br/>
    <>
    <div style={{height:"100vh",padding:"1rem",backgroundColor:"white",color:"black",backsground:"linear-gradient(180deg, rgba(124,218,106,1) 0%, rgba(66,122,38,1) 95%)"}}>
    <h5 style={{color:"#0ac775"}}>//contact us</h5><br/>
    <h4>Drop Us A Line</h4>
    <p>Let's do great work together. Get the right service, determine what you need and contact us for the most suitable Semiconductor services.</p>
    <p>Visit Us ! <br/>
Eternal Samyuktha, Level-3, Block-A, Madhapur, Hi-Techcity, Hyderabad-500081</p>
<p>
Call Us !<br/>
040-40153259 / +91 7675046544
</p>
<p>
Contact Us ! <br/>
<a href='mailto:info@eximiustech.com' target="_blank" >info@eximiustech.com</a>
</p>
    </div>
    </>
    </>
  )
}

export default ContactUs