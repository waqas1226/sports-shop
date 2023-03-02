import React, { useContext, useEffect } from 'react';
import '../CSSfiles/Products.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import OIP from '../Images/OIP.jpg';

import pic from '../bird.jpg';
import { AddBox, HeartBroken, Shop, ShoppingBasketOutlined, ShoppingBasketOutlinShoppingBasketOutlined, edOutlined, ShoppingCart, AddBoxTwoTone, ShoppingCartOutlined } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';



const Products = ({ title, data, nolimit }) => {
  let navigate = useNavigate();
  // const imgClick = (id) => {
  //   // navigate(`/1`);
  // }
  let pic = require(`../Images/${title}.jpg`)

  const {dispatch} = useContext(CartContext)
  function AddtoCart(id){

      let produ=data.filter((prod)=>prod.id==id)
      console.log(produ);
    
    dispatch({type:'AddNew', payload:produ[0]})

  }
  return (
    <div className="ProdContainer">
      <div className="flex justify-between w-full items-baseline py-1 my-2 brbtm">

        <h1 className="text-3xl font-semibold">{title}</h1>
       {!nolimit && <Link to={`/categories/${title}`}>View all</Link>}
      </div>
      <div className='proddiv'>
        {data.map((product, index) =>
          (nolimit || index < 4) && <div className='brlight relative flex flex-col items-center gap-1 justify-between w-11/12 p-2'>
            <Link to={`/${product.id}`}>
              <img src={product.img?product.img:pic} alt="pic" className="rounded-2xl" />
              <p className='text-sm py-2'>{product.name}</p>
            </Link>
            <div className="flex items-center justify-around w-full">
             <ShoppingCartOutlined onClick={()=>AddtoCart(product.id)} className="cursor-pointer" />
              <p className='text-sm'>Price: {product.price}</p>
              <AddBoxTwoTone className="cursor-pointer" />
            </div>

          </div>
        )}
      </div>
    </div>
  )
}

export default Products;

