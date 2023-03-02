import '../CSSfiles/Cart.css';
import React, { useContext, useEffect, useState } from 'react';
import pic from "../Images/OIP.jpg";
import { CartContext } from './CartContext';
import Badminton from '../Images/Badminton.jpg';
import Cricket from '../Images/bat.jpg';
import Sportswares from '../Images/Sportswares.jpg';
import Football from '../Images/football2.jpg';
import BasketBall from '../Images/BasketBall1.jpg';
import Hockey from '../Images/Hockey.jpg';

function Cart(props) {

const {state, dispatch} = useContext(CartContext)
const [ total,setTotal ] = useState(0);
const updateCart=(id,qty)=>{
  dispatch({type:'update', payload:{id,qty}})
}
useEffect(()=>{

  const Total=state.cart.reduce((acc, item)=>acc+item.price*item.qty,0);
  setTotal(Total);
},[state.cart])
  return (
  <div className="cart py-20">
    <div className="w-4/5 flex flex-col items-center mx-auto gap-6 justify-center">

  <h2 className='text-4xl'>Shopping Cart</h2>
  {state.cart.length==0 && <h3 className="text-3xl text-red-500">Cart is Empty</h3>}
{state.cart.map((item)=>
<div className=" pb-2 border-b-2 border-black border-dashed flex items-center gap-3 justify-between w-full">
<img src={item.img?item.img:pic} className='w-28 h-24 rounded-lg' alt="pic"/>
<div className="flex flex-col items-start gap-3 flex-1">

<div className="flex flex-col items-start gap-2 relative w-full">
<h5 className='text-2xl'>{item.name}</h5>
<span>Rs.{item.price}</span>
<button className="absolute right-0 top-2 " onClick={()=>dispatch({type:'remove', payload:item})
}>x</button>
</div>

<div className="flex items-center gap-4">
<div className="border-2 border-black rounded-lg flex w-28 justify-around items-center">
<button onClick={()=>updateCart(item.id,item.qty-1)}>-</button>
{item.qty}
<button onClick={()=>updateCart(item.id,item.qty+1)}>+</button>
</div>
<b>Rs. {item.price * item.qty}</b>
</div>
</div>
</div>)}
    </div>
    <div className="w-4/5 mx-auto my-8">

<h5 className="text-xl text-left border-b-2 border-black w-full">Summary</h5>
<div className="flex mx-auto items-center justify-between my-4 w-4/5">
Order Total:
<span>Rs.{total}</span>
    </div>
</div>
</div>
)}

export default Cart;


