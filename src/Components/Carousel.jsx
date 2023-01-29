import '../CSSfiles/Carousel.css';

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bat from '../Images/bat.jpg';
import football from '../Images/football.jpg';
import basketball from '../Images/basketBall.jpg';
import ball from '../Images/ball.jpg';
function Slider(props) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='carousel'>

    <Carousel fade variant="dark" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="sliderImg"
          src={bat}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p> interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="sliderImg"
          src={ball}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p> interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="sliderImg"
          src={football}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="sliderImg"
          src={basketball}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    </div>
  );
}

export default Slider;