import '../CSSfiles/Carousel.css';

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bat from '../Images/bat.jpg';
import Shuttle from '../Images/Shuttle1.jpg';
import basketball from '../Images/BasketBall1.jpg';
import ball2 from '../Images/ball2.jpg';

const carouselitems=[
{
  title:"Best Bat",
  img:bat 
},
{
  title:"Best Ball",
  img:ball2 
},
{
  title:"Best Shuttle",
  img:Shuttle 
},
{
  title:"Best Basket Ball",
  img:basketball 
}

]
function Slider(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carousel'>
    <Carousel fade variant="dark" activeIndex={index} onSelect={handleSelect}>
{carouselitems.map((item)=>
      <Carousel.Item>
        <img
          className="sliderImg"
          src={item.img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2  className="">{item.title}</h2>
        </Carousel.Caption>
      </Carousel.Item>
)}
     
    </Carousel>


    </div>
  );
}

export default Slider;