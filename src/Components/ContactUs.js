import React from 'react'
import Navbar from './Navbar'
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PinDropRoundedIcon from '@mui/icons-material/PinDropRounded';
const ContactUs = () => {
  return (
    <>
    <Navbar name='Contact_Us' />
    <br/><br/><br/><br/>
    <>
    <div style={{height:"100vh",padding:"1rem",backgroundColor:"",color:"black",backsground:"linear-gradient(180deg, rgba(124,218,106,1) 0%, rgba(66,122,38,1) 95%)"}}>
    <h5 style={{color:"#0ac775"}}>//contact us</h5><br/>
    <h4>Drop Us A Line</h4>
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "black" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}><PhoneInTalkRoundedIcon /> Phone </div>
              +91 XXXXXXXXXX
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}><EmailRoundedIcon /> Email</div>
              info@eximiustech.com
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}><PinDropRoundedIcon /> Location</div>
              Eternal Samyuktha, Level-3, Block-A, Madhapur, Hi-Techcity, Hyderabad-500081
            </div>
    </div>
    </>
    </>
  )
}

export default ContactUs