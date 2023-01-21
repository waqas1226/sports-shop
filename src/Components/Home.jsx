import '../CSSfiles/Home.css';
import React from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import CategoryList from './Categories';
import Featured from './Featured';
import Navbar from './Navbar';
import SideBar from './Sidebar';


function Home(props) {
  return (
    <div>
      <SideBar/>
      <Navbar/>
      <Carousel/>
      <CategoryList/>
      <Featured/>
      <Footer/>
      
    </div>
  );
}

export default Home;

