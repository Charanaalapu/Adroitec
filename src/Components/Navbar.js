import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../Assets/ATS-3-11-TRSS.png';
import './NavBar.css';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DatasetIcon from '@mui/icons-material/Dataset';
import GridViewIcon from '@mui/icons-material/GridView';

function ResponsiveAppBar({name ,role}) {
  let pages=[]
  if (role ==='admin'){
    pages = ['Home', 'Contact'];
  }else {
    // pages = ['Home', 'Message', 'Contact','Upload Login folder', 'Create User'];
    pages = ['Home', 'About', 'Technologies','career', 'Contact Us'];
  }

  const navigate = useNavigate();
  const settings = ['Logout'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const theme = useTheme();
  const isScreenSize600pxOrMore = useMediaQuery(theme.breakpoints.up('sm'));
  const [selectedPage, setSelectedPage] = React.useState(name);
  const messageButtonRef = React.useRef(null);
  const homeButtonRef = React.useRef(null);
  const contactButtonRef = React.useRef(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleNavigate = (page) => {
    setSelectedPage((prevSelectedPage) => {
      if (prevSelectedPage === page) return page; // No change if already selected
      if (page === 'Home') {
        navigate('/Adroitec');
      } else if (page === 'About') {
        navigate('/about');
      } else if (page === 'About') {
        navigate('/about');
      } else if (page === 'Career') {
        navigate('/career');
      } else if (page === 'Services') {
        navigate('/services');
      } else if (page === 'Business Model') {
        navigate('/business_model');
      } else if (page === 'Contact Us') {
        navigate('/contact_us');
      }
      return page;
    });
  };

  const handleSettings = (setting) => {
    if (setting === 'Logout') {
      localStorage.removeItem('token', '');
      localStorage.removeItem('userId', '');
      localStorage.removeItem('userRole', '');
      navigate('/');
    }
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
    <div>
      <div>hi</div>
      <div>hi</div>
    </div>
    <nav className="navv fixed-top">
      <div className="icon">
      <img src={logo} className='logo' alt="Logo" />
        {/* <h3>Covid19</h3> */}
      </div>
      <a href="#" className="togglebutton" onClick={handleToggle}>
        <span className="lines"></span>
        <span className="lines"></span>
        <span className="lines"></span>
      </a>
      <div className={isActive ? 'navbar-links active' : 'navbar-links'}>
        <ul>
          <li><a href="Adroitec" className="a">Home<span className="line"></span></a></li>
          <li><a href="/Adroitec/about" className="a">About us<span className="line"></span></a></li>
          <li><a href="/Adroitec/services" className="a">Services<span className="line"></span></a></li>
          <li><a href="/Adroitec/business_model" className="a">Business Model<span className="line"></span></a></li>
          <li><a href="/Adroitec/career" className="a">Career<span className="line"></span></a></li>
          <li><a href="/Adroitec/contact_us" className="a">Contact us<span className="line"></span></a></li>
          <li className='hide'><a href="" className="a"><GridViewIcon style={{marginTop:"5px"}}/></a></li>
        </ul>
      </div>
    </nav>
    </>


    // <AppBar position="static" sx={{ background: 'linear-gradient(82deg, rgba(252,252,252,1) 0%, rgba(11,22,11,0.8) 57%)', height: '80px',width:"100%", alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
    // {/* // <AppBar position="static" sx={{ background: 'rgb(148, 151, 150,30.9)', height: '13vh',width:"100%", alignItems: 'center', display: 'flex', justifyContent: 'center' }}> */}
    //   <Container maxWidth="xl" sx={{ margin: 0 }}>
    //     <Toolbar disableGutters sx={{ justifyContent: 'center', padding: 0 }}>
    //         <Box className="logo" sx={{ display: 'flex', alignItems: 'center', width: '15em', height: '100%' }}>
    //           <img src={logo} alt="Logo" style={{ width: isScreenSize600pxOrMore ? '100%':"50%",marginLeft:isScreenSize600pxOrMore ?"":"-3rem", height: '100%' }} />
    //         </Box>
    //       <Box sx={{ display: { xs: 'flex', md: 'none', alignItems: 'center' } }}>
    //         <IconButton style={{marginRight:"-16rem",color:"white"}}
    //           size="large"
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           onClick={handleOpenNavMenu}
    //           color="black"
    //           sx={{
    //             display: { xs: 'block', md: 'none' },
    //             order: { xs: -1, md: 0 },
    //           }}
    //         >
    //           <MenuIcon />
    //         </IconButton>
    //         <Menu 
    //           id="menu-appbar"
    //           anchorEl={anchorElNav}
    //           anchorOrigin={{
    //             vertical: 'bottom',
    //             horizontal: 'left',
    //           }}
    //           keepMounted
    //           transformOrigin={{
    //             vertical: 'top',
    //             horizontal: 'left',
    //           }}
    //           open={Boolean(anchorElNav)}
    //           onClose={handleCloseNavMenu}
    //           sx={{
    //             display: { xs: 'block', md: 'none' },
    //           }}
    //         >
    //           {pages.map((page) => (
    //             <MenuItem key={page} onClick={() => handleNavigate(page)}>
    //               <Typography textAlign="center">{page}</Typography>
    //             </MenuItem>
    //           ))}
    //         </Menu>
    //         <Box className='logo2' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '11em', height: '100%' }}>
    //           {/* <img src={logo} alt="Logo" style={{ width: '100%', height: '100%' }} /> */}
    //         </Box>
    //       </Box>
    //       <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'end' } }}>

    //       <Button
    //             // key={page}
    //             // ref={page === 'Message' ? messageButtonRef : page === 'Home' ? homeButtonRef : contactButtonRef}
    //             onClick={() => handleNavigate("Home")}
    //             sx={{
    //               my: 1, mx: 1, color: selectedPage ==="Home" ? '#0ac775' :"white", fontSize: 'medium', marginRight: "2rem", display: 'flex', fontFamily: "Poppins",
    //               transition: 'border-bottom 0.3s',
    //               height:"1.8rem",
    //               borderBottom: selectedPage ==="Home" ? '3px solid #0ac775' : 'none',
    //               '&:hover': {
    //                 textDecoration: 'none',
    //                 color:"#0ac775",
    //                 // backgroundColor:"white",
    //                 // borderTopRightRadius:"25px",
    //                 // borderBottomLeftRadius:"25px",
    //               },
    //               '&:focus': {
    //                 // textDecoration: 'none',
    //                 // borderTopRightRadius:"20px",
    //                 // borderBottomLeftRadius:"20px",
    //                 border:"0.1 solid rgb(19, 27, 38)",
    //                 color:"green",
    //                 border:"none",
    //                 outline: "none",


    //               },
    //             }}
    //           >
    //             Home
    //             {/* {page} */}
    //           </Button>
    //       <Button
    //             // key={page}
    //             // ref={page === 'Message' ? messageButtonRef : page === 'Home' ? homeButtonRef : contactButtonRef}
    //             onClick={() => handleNavigate("About")}
    //             sx={{
    //               my: 1, mx: 1, color:selectedPage ==="About" ? '#0ac775' :"white", fontSize: 'medium', marginRight: "2rem", display: 'flex', fontFamily: "Poppins",
    //               transition: 'border-bottom 0.3s',
    //               height:"1.8rem",
    //               borderBottom: selectedPage === "About" ? '3px solid #0ac775' : 'none',
    //               '&:hover': {
    //                 textDecoration: 'none',
    //                 color:"#0ac775",
    //                 // backgroundColor:"white",
    //                 // borderTopRightRadius:"25px",
    //                 // borderBottomLeftRadius:"25px",
    //               },
    //               '&:focus': {
    //                 // textDecoration: 'none',
    //                  // borderTopRightRadius:"20px",
    //                 // borderBottomLeftRadius:"20px",
    //                 border:"0.1 solid rgb(19, 27, 38)",
    //                 color:"green",
    //                 border:"none",
    //                 outline: "none",


    //               },
    //             }}
    //           >
    //             About
    //             {/* {page} */}
    //           </Button>   
       
    //       <Button
    //             // key={page}
    //             // ref={page === 'Message' ? messageButtonRef : page === 'Home' ? homeButtonRef : contactButtonRef}
    //             onClick={() => handleNavigate("Services")}
    //             sx={{
    //               my: 1, mx: 1, color: selectedPage ==="Services" ? '#0ac775' :"white", fontSize: 'medium', marginRight: "2rem", display: 'flex', fontFamily: "Poppins",
    //               transition: 'border-bottom 0.3s',
    //               height:"1.8rem",
    //               borderBottom: selectedPage ==="Services" ? '3px solid #0ac775' : 'none',
    //               '&:hover': {
    //                 textDecoration: 'none',
    //                 color:"#0ac775",
    //                 // backgroundColor:"white",
    //                 // borderTopRightRadius:"25px",
    //                 // borderBottomLeftRadius:"25px",
    //               },
    //               '&:focus': {
    //                 // textDecoration: 'none',
    //                  // borderTopRightRadius:"20px",
    //                 // borderBottomLeftRadius:"20px",
    //                 border:"0.1 solid rgb(19, 27, 38)",
    //                 color:"green",
    //                 border:"none",
    //                 outline: "none",


    //               },
    //             }}
    //           >
    //             Services
    //             {/* {page} */}
    //           </Button>
    //           <Button
    //             // key={page}
    //             // ref={page === 'Message' ? messageButtonRef : page === 'Home' ? homeButtonRef : contactButtonRef}
    //             onClick={() => handleNavigate("Career")}
    //             sx={{
    //               my: 1, mx: 1, color: selectedPage ==="Career" ? '#0ac775' :"white", fontSize: 'medium', marginRight: "2rem", display: 'flex', fontFamily: "Poppins",
    //               transition: 'border-bottom 0.3s',
    //               height:"1.8rem",
    //               borderBottom: selectedPage ==="Career" ? '3px solid #0ac775' : 'none',
    //               '&:hover': {
    //                 textDecoration: 'none',
    //                 color:"#0ac775",
    //                 // backgroundColor:"white",
    //                 // borderTopRightRadius:"25px",
    //                 // borderBottomLeftRadius:"25px",
    //               },
    //               '&:focus': {
    //                 // textDecoration: 'none',
    //                  // borderTopRightRadius:"20px",
    //                 // borderBottomLeftRadius:"20px",
    //                 border:"0.1 solid rgb(19, 27, 38)",
    //                 color:"green",
    //                 border:"none",
    //                 outline: "none",


    //               },
    //             }}
    //           >
    //             Career
    //             {/* {page} */}
    //           </Button>
    //       <Button
    //             // key={page}
    //             // ref={page === 'Message' ? messageButtonRef : page === 'Home' ? homeButtonRef : contactButtonRef}
    //             onClick={() => handleNavigate("Business Model")}
    //             sx={{
    //               my: 1, mx: 1, color:selectedPage ==="Business Model" ? '#0ac775' :"white", fontSize: 'medium', marginRight: "2rem", display: 'flex', fontFamily: "Poppins",
    //               transition: 'border-bottom 0.3s',
    //               height:"1.8rem",
    //               borderBottom: selectedPage ==="Business Model" ? '3px solid #0ac775' : 'none',
    //               '&:hover': {
    //                 textDecoration: 'none',
    //                 color:"#0ac775",
    //                 // backgroundColor:"white",
    //                 // borderTopRightRadius:"25px",
    //                 // borderBottomLeftRadius:"25px",
    //               },
    //               '&:focus': {
    //                 // textDecoration: 'none',
    //                 // borderTopRightRadius:"20px",
    //                 // borderBottomLeftRadius:"20px",
    //                 border:"0.1 solid rgb(19, 27, 38)",
    //                 color:"green",
    //                 border:"none",
    //                 outline: "none",
    //                 outline: "none",


    //               },
    //             }}
    //           >
    //             Business Model
    //             {/* {page} */}
    //           </Button>
    //       <Button
    //             // key={page}
    //             // ref={page === 'Message' ? messageButtonRef : page === 'Home' ? homeButtonRef : contactButtonRef}
    //             onClick={() => handleNavigate("Contact Us")}
    //             sx={{
    //               my: 1, mx: 1, color:selectedPage ==="Contact Us" ? '#0ac775' :"white", fontSize: 'medium', marginRight: "2rem", display: 'flex', fontFamily: "Poppins",
    //               transition: 'border-bottom 0.3s',
    //               height:"1.8rem",
    //               borderBottom: selectedPage ==="Contact Us" ? '3px solid #0ac775' : 'none',
    //               '&:hover': {
    //                 textDecoration: 'none',
    //                 color:"#0ac775",
    //                 // backgroundColor:"white",
    //                 // borderTopRightRadius:"25px",
    //                 // borderBottomLeftRadius:"25px",
    //               },
    //               '&:focus': {
    //                 // textDecoration: 'none',
    //                 // borderTopRightRadius:"20px",
    //                 // borderBottomLeftRadius:"20px",
    //                 border:"0.1 solid rgb(19, 27, 38)",
    //                 color:"green",
    //                 border:"none",
    //                 outline: "none",


    //               },
    //             }}
    //           >
    //             Contact Us
    //             {/* {page} */}
    //           </Button>
          
    //       </Box>
          
    //     </Toolbar>
    //   </Container>
    // </AppBar>
  );
}

export default ResponsiveAppBar;

