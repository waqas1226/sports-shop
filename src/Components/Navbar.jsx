import '../CSSfiles/Navbar.css';
import React, { useContext, useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import pic from '../bird.jpg';
import { Search, ShoppingCartCheckout } from '@mui/icons-material';
import SideBar from './Sidebar';
import { Link } from 'react-router-dom';
import SideBar2 from './Sidebar2';
import { CartContext } from './CartContext';


function NavBar(props) {
  const [index, setIndex] = useState(0);

const {state} = useContext(CartContext)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <nav>
       <div className='navb flex items-center'>
        <SideBar2/>
      <Link to="/" className='link fs2 min-w-max '>Sports Shop</Link>
      <SideBar/>
      <div className="home df gp">
        <Link to="/1" className='link'>About</Link>
      </div>
      <form inline className="searchForm df m-1">
        <input type="text" placeholder="Search" />
        <span><Search/></span>
      </form>
      <div className='logincart df gp ml-auto relative'>
      
        <Link to="/cart" className='link hover:text-black'><ShoppingCartCheckout/><span className='bg-red-500 w-5 h-5 rounded-full absolute -top-2 left-3 text-sm text-white z-30'>{state.cart.length}</span></Link>
        <Link to="/login" className='link'>Login</Link>
      </div>
    </div>


    </nav>
  );
}

export default NavBar;