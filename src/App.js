import Home from './Components/Home';
import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import ProductView from './Components/ProductView';
import Register from './Components/Register';
import Cart from './Components/Cart';
import NavBar from './Components/Navbar';
import AllCategories from './Components/AllCategories';
import Products from './Components/Products';
import { bats, Balls, badminton, hockey, BasketBall, Football } from './Components/ProductSource';
import { Categories } from './Components/Categorysource';
import CategoryList from './Components/Categories';

// import { AuthContextadmin } from "./components/Context/AuthContext";
// import { AuthContext } from "./BookingApp/Context/AuthContext";

function App() {
 useEffect(()=>{
alert('Continued')
 },[])

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/">
              <Route index element={<Home/>} />
              <Route exact path=":prodId" element={<ProductView/>} />
              <Route exact path="register" element={<Register/>} />

              <Route path="categories">
              <Route index element={<CategoryList Categories={Categories} nolimit={true}/>} />
              <Route exact path="Featured" element={<Products title="Featured" nolimit={true} data={Balls}/>} />
              <Route exact path="Cricket" element={<Products title="Cricket" nolimit={true}  data={bats}/>} />
              <Route exact path="Hockey" element={<Products title="Hockey" nolimit={true} data={hockey}/>} />
              <Route exact path="Badminton" element={<Products title="Badminton" nolimit={true} data={badminton}/>} />
              <Route exact path="BasketBall" element={<Products title="BasketBall" nolimit={true} data={BasketBall}/>} />
              <Route exact path="Football" element={<Products title="Football" nolimit={true} data={Football}/>} />
              </Route>

              <Route exact path="cart" element={<Cart/>} />
              <Route exact path="login" element={<Register/>} />

              {/* <Route path="Search">
                <Route index element={<Search />} />
                <Route exact path=":userid" element={<SingleSer />} />
              </Route> */}

           
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

