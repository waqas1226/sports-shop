import React from 'react';
import '../CSSfiles/Categories.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic from '../bird.jpg';
import badminton from '../Images/badminton.jpg';
import bat from '../Images/bat.jpg';
import Sportswares from '../Images/Sportswares.jpg';
import football from '../Images/football.jpg';
import basketball1 from '../Images/basketball1.jpg';
import OIP from '../Images/OIP.jpg';


const Categories = [
  {
    name: 'Badminton',
    image:badminton,
  },
  {
    name: 'Cricket',
    image:bat,
  },
  {
    name: 'Football',
    image:football,
  },
  {
    name: 'Basket Ball',
    image:basketball1,
  },
  {
    name: 'Sportswares',
    image:Sportswares,
  }
];

const CategoryList = () => (
  <div className="catContainer">
    <h1 className="catagoriesTitle">Catagories</h1>
    <div className='catItems'>
    {Categories.map((category, index) => (
      <Card style={{ width: '20%',height:'30px', margin: '1rem 1%'}}>
      <Card.Img variant="top" src={category.image} />
      <Card.Body>
        <Card.Title>{category.name}</Card.Title>
      </Card.Body>
    </Card>
    ))}
    <Card style={{ width: '20%', margin: '1rem 1%'}}>
      <Card.Img variant="top" src={OIP} />
      <Card.Body>
        <Card.Title>All Catagories</Card.Title>
      </Card.Body>
    </Card>
    </div>
    </div>
);

export default CategoryList;

