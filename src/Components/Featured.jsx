import React from 'react';
import '../CSSfiles/Featured.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic from '../bird.jpg';


const FeaturedProds = [
  {
    name: 'Product 1',
    image:pic,
  },
  {
    name: 'Product 2',
    image:pic,
  },
  {
    name: 'Product 3',
    image:pic,
  },
  {
    name: 'Product 4',
    image:pic,
  },
  {
    name: 'Product 5',
    image:pic,
  },
  {
    name: 'Product 6',
    image:pic,
  },
  {
    name: 'Product 7',
    image:pic,
  },
  {
    name: 'Product 8',
    image:pic,
  }
];

const Featured = () => {


  return (
  <div className="FeaturedContainer">
    <h1 className="Featuredtitle">Featured Products</h1>
    {FeaturedProds.map((Product, index) => (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title>{Product.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    ))}
    </div>
)}

export default Featured;

