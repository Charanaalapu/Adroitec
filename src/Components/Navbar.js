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
          <li><a href="about" className="a">About us<span className="line"></span></a></li>
          <li><a href="services" className="a">Services<span className="line"></span></a></li>
          <li><a href="business_model" className="a">Business Model<span className="line"></span></a></li>
          <li><a href="career" className="a">Career<span className="line"></span></a></li>
          <li><a href="contact_us" className="a">Contact us<span className="line"></span></a></li>
          <li className='hide'><a href="" className="a"><GridViewIcon style={{marginTop:"5px"}}/></a></li>
        </ul>
      </div>
    </nav>
    </>

  );
}

export default ResponsiveAppBar;

