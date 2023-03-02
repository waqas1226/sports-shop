import '../CSSfiles/Home.css';
import Carousel from './Carousel';
import Footer from './Footer';
import CategoryList from './Categories';
import Navbar from './Navbar';
import SideBar from './Sidebar';
import SideBar2 from './Sidebar2';
import Products from './Products';
import { bats, Balls, badminton, hockey  } from './ProductSource';
import React, { useState } from 'react';


function Home(props) {
  return (
    <div className='home mt-16'>
      {/* <Navbar/> */}
      {/* <SideBar/> */}
      {/* <SideBar2/> */}
      <Carousel/>
      <CategoryList/>
      <Products title="Featured" nolimit={false} data={bats}/>
      <Products title="Cricket" nolimit={false} data={Balls}/>
      <Products title="Badminton" nolimit={false} data={badminton}/>
      <Products title="Hockey" nolimit={false} data={hockey}/>
      <Footer/>
      
    </div>
  );
}

export default Home;

