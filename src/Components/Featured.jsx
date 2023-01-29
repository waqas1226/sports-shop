import React from 'react';
import '../CSSfiles/Featured.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic from '../bird.jpg';
import { HeartBroken, Shop, ShoppingBasketOutlined, ShoppingCart } from '@mui/icons-material';


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
    {FeaturedProds.map((Product, index) => (
      <Card style={{ width: '30%' }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title>{Product.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className='btn'> <ShoppingCart/></Button>
        <Button variant="primary" className='btn'><HeartBroken/></Button>
      </Card.Body>
    </Card>
    ))}
    </div>
)}

export default Featured;

