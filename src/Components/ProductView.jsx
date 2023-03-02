import '../CSSfiles/ProductView.css';
import pic from '../Images/ball.jpg';
import { Facebook, HeartBroken, HeartBrokenRounded,ShoppingCart, Twitter, WhatsApp } from '@mui/icons-material';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
  import { CartContext } from './CartContext';
  import { bats } from './ProductSource';




// const prod[0] =
//   {
//     id: 12,
//     title: 'prod[0] 8',
//     price: 126,
//     qty: 1,
//     img: pic,
//   };

const ProductView = () => {

  let navigate = useNavigate();
const {dispatch} = useContext(CartContext)
const location=useLocation();
  const prodid=location.pathname[1]
  const prod=bats.filter(bat=>bat.id==prodid);
  console.log(prod[0])
  console.log(prod[0].name)



  
  const AddToCart = () => {
    dispatch({type:'AddNew', payload:prod[0]})
    console.log("add pv to cart");
  //  navigate('/Search', {state:{destination, dates, options}})
  }
  return (
  <div className="x">
    <div className="flex flex-col items-center gap-8 w-4/5 mx-auto py-2 mb-7 br">

      <h2 className="text-3xl ">{prod[0].name}</h2>
    <img src={pic} alt="pic" className="w-4/5 mx-auto" />
      
    <div className="flex flex-col items-center w-4/5 gap-6">

    <div className="flex items-center gap-1 sm:gap-9 justify-around">
    <img src={pic} alt="pic" className="w-20" />
    <img src={pic} alt="pic" className="w-20" />
    <img src={pic} alt="pic" className="w-20" />
    <img src={pic} alt="pic" className="w-20" />
    </div>

    <b className="text-lg brgt brgb w-full lg:w-full">
      Price:{prod[0].price}
    </b>
    <div className="brgb flex justify-around w-full">
      <span><b>Stock:</b> in stock</span>
      <span><b>Ships in:</b> 1~3 days</span>
    </div>

    <div className="brgb w-full"><b>Delivery area:</b> Lahore only</div>
    <div className="brgb w-full"><b>Country of Origin:</b> Pakistan</div>
    <div className="brgb w-full"><b>Shipped by:</b> Smart cart</div>

    <div className="flex justify-between w-full brgb "> 
    <span className="flex gap-2"><HeartBrokenRounded/>Add to wishlist</span>
     <div className="flex gap-4"><WhatsApp/><Facebook/><Twitter/></div> 
     </div>

    </div>
    </div>
    <div className='flex w-full fixed bottom-0 h-8'>
    <button className="w-1/2 text-orange-100 bg-gray-900">Buy Now</button>
    <button className="w-1/2 bg-orange-300" onClick={AddToCart}>Add to Cart</button>
    </div>
    </div>
)}

export default ProductView;



 








