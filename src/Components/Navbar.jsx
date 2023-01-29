import '../CSSfiles/Navbar.css';
import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import pic from '../bird.jpg';
import { MenuOutlined, Search, ShoppingCartCheckout } from '@mui/icons-material';
import SideBar from './Sidebar';
import { Link } from 'react-router-dom';

function NavBar(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <nav>
       <div className='navb df'>
      <Link to="/" className='link fs2'>Smart Cart</Link>
      <SideBar/>
      <div className="home df gp">
        <Link to="/1" className='link'>About</Link>
      </div>
      <form inline className="searchForm df">
        <input type="text" placeholder="Search" />
        <span><Search/></span>
      </form>
      <div className='logincart df gp'>
        <Link to="/cart" className='link'><ShoppingCartCheckout/></Link>
        <Link to="/login" className='link'>Login</Link>
      </div>
    </div>


    </nav>
  );
}

export default NavBar;