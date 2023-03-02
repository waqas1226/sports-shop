import { createContext, useReducer } from "react";


const INIT_STATE = {
  cart: [],
};

export const CartContext = createContext(INIT_STATE);

const CartReducer = (state, action) => {
  switch (action.type) {
    case "AddNew":
      return {...state, cart:[...state.cart, action.payload ]};

    case "remove":
      return {...state, cart:state.cart.filter(item=>item.id!==action.payload.id)};

    // case "remove":
    //   return {...state, cart:state.cart.filter((item)=>item.id!==action.payload.id)};

    case "update":
      return {...state, cart:state.cart.filter(item=>(item.id==action.payload.id?item.qty=action.payload.qty:item.qty))};



    case "reset":
      return INIT_STATE;

    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, INIT_STATE);
  return (
    <CartContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
 // title: state.title,
        // price: state.price,
        // qty: state.qty,