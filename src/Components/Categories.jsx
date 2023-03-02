import React from 'react';
import '../CSSfiles/Categories.css';
import Badminton from '../Images/Badminton.jpg';
import Cricket from '../Images/bat.jpg';
import Sportswares from '../Images/Sportswares.jpg';
import Football from '../Images/football2.jpg';
import BasketBall from '../Images/BasketBall1.jpg';
import Hockey from '../Images/Hockey.jpg';
import OIP from '../Images/OIP.jpg';
import { Link } from 'react-router-dom';



const Categories = [
  {
    name: 'Badminton',
    image:Badminton,
  },
  {
    name: 'Cricket',
    image:Cricket,
  },
  {
    name: 'Football',
    image:Football,
  },
  {
    name: 'BasketBall',
    image:BasketBall,
  },
  {
    name: 'Hockey',
    image:Hockey,

  },
  {
    name: 'Sportswares',
    image:Sportswares,
  }
];

const CategoryList = ({nolimit}) => {

return(
  <div className="catContainer">
    <div className="flex justify-between w-full items-baseline brbtm py-1">

    <h1 className="text-3xl font-semibold">Catagories</h1>
    {!nolimit && <Link to='/'>View all</Link>}
    </div>
    <div className='catdivhome'>
    {Categories.map((category, index) => (
      (nolimit || index < 5) && <Link to={`/categories/${category.name}`} className='flex flex-col items-center flex-wrap my-3'>
      <img src={category.image} alt="pic" className="w-36 h-32 rounded-2xl"/>
        <p className='text-sm'>{category.name}</p>
      
    </Link>
    ))}
    {!nolimit && <div className='flex flex-col items-center flex-wrap my-3'>
      <img src={OIP} alt="pic" className="w-36 h-32 rounded-2xl "/>
        <Link to='/categories' className='text-base'>All Categories</Link>
    </div>
}
    </div>
    </div>
)};

export default CategoryList;

