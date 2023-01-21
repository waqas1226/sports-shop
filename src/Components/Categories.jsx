import React from 'react';
import '../CSSfiles/Categories.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic from '../bird.jpg';


const Categories = [
  {
    name: 'Category 1',
    image:pic,
  },
  {
    name: 'Category 2',
    image:pic,
  },
  {
    name: 'Category 3',
    image:pic,
  },
  {
    name: 'Category 4',
    image:pic,
  },
  {
    name: 'Category 5',
    image:pic,
  },
  {
    name: 'Category 6',
    image:pic,
  },
  {
    name: 'Category 7',
    image:pic,
  },
  {
    name: 'Category 8',
    image:pic,
  }
];

const CategoryList = () => (
  <div className="catContainer">
    <h1 className="catagoriesTitle">Catagories</h1>
    <div className='catItems'>
    {Categories.map((category, index) => (
      <Card style={{ width: '8rem' }}>
      <Card.Img variant="top" src={pic} />
      <Card.Body>
        <Card.Title>{category.name}</Card.Title>
        <Card.Text>
          Some quick example text 
        </Card.Text>
      </Card.Body>
    </Card>
    ))}
    </div>
    </div>
);

export default CategoryList;

