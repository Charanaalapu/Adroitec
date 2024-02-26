// import React from 'react'

// const Navbar = () => {
//   return (
//     <>
//     <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#202833",opacity:"1",color:"white"}}>
//   <a className="navbar-brand" href="#">Navbar</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//     <div className="navbar-nav">
//       <p className="nav-item nav-link active">Home</p>
//       <p className="nav-item nav-link">Pages</p>
//       <p className="nav-item nav-link">Services</p>
//       <p className="nav-item nav-link">Career</p>
//       <p className="nav-item nav-link">ContactUs</p>
//       {/* <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
//       <a className="nav-item nav-link" href="#">Pages</a>
//       <a className="nav-item nav-link" href="#">Services</a>
//       <a className="nav-item nav-link disabled" href="#">Career</a>
//       <a className="nav-item nav-link disabled" href="#">ContactUs</a> */}
//     </div>
//   </div>
// </nav>
// </>
//   )
// }

// export default Navbar

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
import logo from '../Assets/newlogo.png';
import './NavBar.css';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import { useNavigate } from 'react-router-dom';


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
  const isScreenSize889pxOrMore = useMediaQuery(theme.breakpoints.up('sm'));
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
        navigate('/home');
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

  return (
    <AppBar position="static" sx={{ background: 'rgb(19, 27, 38,1)', height: '13vh',width:"100%", alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
    {/* // <AppBar position="static" sx={{ background: 'rgb(148, 151, 150,30.9)', height: '13vh',width:"100%", alignItems: 'center', display: 'flex', justifyContent: 'center' }}> */}
      <Container maxWidth="xl" sx={{ margin: 0 }}>
        <Toolbar disableGutters sx={{ justifyContent: 'center', padding: 0 }}>
          {isScreenSize889pxOrMore && (
            <Box className="logo" sx={{ display: 'flex', alignItems: 'center', width: '15em', height: '100%' }}>
              <img src={logo} alt="Logo" style={{ width: '100%', height: '100%' }} />
            </Box>
          )}
          <Box sx={{ display: { xs: 'flex', md: 'none', alignItems: 'center' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
              sx={{
                display: { xs: 'block', md: 'none' },
                order: { xs: -1, md: 0 },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleNavigate(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Box className='logo2' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '11em', height: '100%' }}>
              {/* <img src={logo} alt="Logo" style={{ width: '100%', height: '100%' }} /> */}
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'end' } }}>

          <Button
                // key={page}
                // ref={page === 'Message' ? messageButtonRef : page === 'Home' ? homeButtonRef : contactButtonRef}
                onClick={() => handleNavigate("Home")}
                sx={{
                  my: 1, mx: 1, color: 'white', fontSize: 'medium', marginRight: "2rem", display: 'flex', fontFamily: "Poppins",
                  transition: 'border-bottom 0.3s',
                  height:"1.8rem",
                  borderBottom: selectedPage ==="Home" ? '3px solid orange' : 'none',
                  '&:hover': {
                    textDecoration: 'none',
                    backgroundColor:"white",
                    borderTopRightRadius:"25px",
                    borderBottomLeftRadius:"25px",
                    color:"rgb(19, 27, 38)"
                  },
                  '&:focus': {
                    // textDecoration: 'none',
                    borderTopRightRadius:"20px",
                    borderBottomLeftRadius:"20px",
                    border:"0.1 solid rgb(19, 27, 38)",
                    color:"green",
                    border:"none",
                    backgroundColor:"white",

                  },
                }}
              >
                Home
                {/* {page} */}
              </Button>
          <Button
                // key={page}
                // ref={page === 'Message' ? messageButtonRef : page === 'Home' ? homeButtonRef : contactButtonRef}
                onClick={() => handleNavigate("About")}
                sx={{
                  my: 1, mx: 1, color: 'white', fontSize: 'medium', marginRight: "2rem", display: 'flex', fontFamily: "Poppins",
                  transition: 'border-bottom 0.3s',
                  height:"1.8rem",
                  borderBottom: selectedPage === "About" ? '3px solid orange' : 'none',
                  '&:hover': {
                    textDecoration: 'none',
                    backgroundColor:"white",
                    borderTopRightRadius:"25px",
                    borderBottomLeftRadius:"25px",
                    color:"rgb(19, 27, 38)"
                  },
                  '&:focus': {
                    // textDecoration: 'none',
                    borderTopRightRadius:"20px",
                    borderBottomLeftRadius:"20px",
                    border:"0.1 solid rgb(19, 27, 38)",
                    color:"green",
                    border:"none",
                    backgroundColor:"white",

                  },
                }}
              >
                About
                {/* {page} */}
              </Button>   
          <Button
                // key={page}
                // ref={page === 'Message' ? messageButtonRef : page === 'Home' ? homeButtonRef : contactButtonRef}
                onClick={() => handleNavigate("Career")}
                sx={{
                  my: 1, mx: 1, color: 'white', fontSize: 'medium', marginRight: "2rem", display: 'flex', fontFamily: "Poppins",
                  transition: 'border-bottom 0.3s',
                  height:"1.8rem",
                  borderBottom: selectedPage ==="Career" ? '3px solid orange' : 'none',
                  '&:hover': {
                    textDecoration: 'none',
                    backgroundColor:"white",
                    borderTopRightRadius:"25px",
                    borderBottomLeftRadius:"25px",
                    color:"rgb(19, 27, 38)"
                  },
                  '&:focus': {
                    // textDecoration: 'none',
                    borderTopRightRadius:"20px",
                    borderBottomLeftRadius:"20px",
                    border:"0.1 solid rgb(19, 27, 38)",
                    color:"green",
                    border:"none",
                    backgroundColor:"white",

                  },
                }}
              >
                Career
                {/* {page} */}
              </Button>
          <Button
                // key={page}
                // ref={page === 'Message' ? messageButtonRef : page === 'Home' ? homeButtonRef : contactButtonRef}
                onClick={() => handleNavigate("Services")}
                sx={{
                  my: 1, mx: 1, color: 'white', fontSize: 'medium', marginRight: "2rem", display: 'flex', fontFamily: "Poppins",
                  transition: 'border-bottom 0.3s',
                  height:"1.8rem",
                  borderBottom: selectedPage ==="Services" ? '3px solid orange' : 'none',
                  '&:hover': {
                    textDecoration: 'none',
                    backgroundColor:"white",
                    borderTopRightRadius:"25px",
                    borderBottomLeftRadius:"25px",
                    color:"rgb(19, 27, 38)"
                  },
                  '&:focus': {
                    // textDecoration: 'none',
                    borderTopRightRadius:"20px",
                    borderBottomLeftRadius:"20px",
                    border:"0.1 solid rgb(19, 27, 38)",
                    color:"green",
                    border:"none",
                    backgroundColor:"white",

                  },
                }}
              >
                Services
                {/* {page} */}
              </Button>
          <Button
                // key={page}
                // ref={page === 'Message' ? messageButtonRef : page === 'Home' ? homeButtonRef : contactButtonRef}
                onClick={() => handleNavigate("Business Model")}
                sx={{
                  my: 1, mx: 1, color: 'white', fontSize: 'medium', marginRight: "2rem", display: 'flex', fontFamily: "Poppins",
                  transition: 'border-bottom 0.3s',
                  height:"1.8rem",
                  borderBottom: selectedPage ==="Business Model" ? '3px solid orange' : 'none',
                  '&:hover': {
                    textDecoration: 'none',
                    backgroundColor:"white",
                    borderTopRightRadius:"25px",
                    borderBottomLeftRadius:"25px",
                    color:"rgb(19, 27, 38)"
                  },
                  '&:focus': {
                    // textDecoration: 'none',
                    borderTopRightRadius:"20px",
                    borderBottomLeftRadius:"20px",
                    border:"0.1 solid rgb(19, 27, 38)",
                    color:"green",
                    border:"none",
                    backgroundColor:"white",

                  },
                }}
              >
                Business Model
                {/* {page} */}
              </Button>
          <Button
                // key={page}
                // ref={page === 'Message' ? messageButtonRef : page === 'Home' ? homeButtonRef : contactButtonRef}
                onClick={() => handleNavigate("Contact Us")}
                sx={{
                  my: 1, mx: 1, color: 'white', fontSize: 'medium', marginRight: "2rem", display: 'flex', fontFamily: "Poppins",
                  transition: 'border-bottom 0.3s',
                  height:"1.8rem",
                  borderBottom: selectedPage ==="Contact Us" ? '3px solid orange' : 'none',
                  '&:hover': {
                    textDecoration: 'none',
                    backgroundColor:"white",
                    borderTopRightRadius:"25px",
                    borderBottomLeftRadius:"25px",
                    color:"rgb(19, 27, 38)"
                  },
                  '&:focus': {
                    // textDecoration: 'none',
                    borderTopRightRadius:"20px",
                    borderBottomLeftRadius:"20px",
                    border:"0.1 solid rgb(19, 27, 38)",
                    color:"green",
                    border:"none",
                    backgroundColor:"white",

                  },
                }}
              >
                Contact Us
                {/* {page} */}
              </Button>
            {/* {pages.map((page) => (
              <Button
                key={page}
                ref={page === 'Message' ? messageButtonRef : page === 'Home' ? homeButtonRef : contactButtonRef}
                onClick={() => handleNavigate(page)}
                sx={{
                  my: 1, mx: 1, color: 'white', fontSize: 'medium', marginRight: "4.7rem", display: 'flex', fontFamily: "Poppins",
                  transition: 'border-bottom 0.3s',
                  height:"1.8rem",
                  borderBottom: selectedPage === page ? '3px solid orange' : 'none',
                  '&:hover': {
                    textDecoration: 'none',
                    backgroundColor:"white",
                    borderTopRightRadius:"25px",
                    borderBottomLeftRadius:"25px",
                    color:"rgb(19, 27, 38)"
                  },
                  '&:focus': {
                    // textDecoration: 'none',
                    borderTopRightRadius:"20px",
                    borderBottomLeftRadius:"20px",
                    border:"0.1 solid rgb(19, 27, 38)",
                    color:"green",
                    border:"none",
                    backgroundColor:"white",

                  },
                }}
              >
                {page}
              </Button>
            ))} */}
          </Box>
          {/* <p id='logout_button' onClick={handleOpenUserMenu}>
            <span style={{ color: "rgb(0, 99, 107)", fontSize: 'medium', display: 'block', fontFamily: "'Poppins', sans-serif", marginRight: "10px" }}>Logout</span>
          </p> */}
          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Profile">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, border: '1px solid black', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={() => handleSettings(setting)}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;

