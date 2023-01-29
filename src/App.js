import Home from './Components/Home';
import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import ProductView from './Components/ProductView';
import Register from './Components/Register';

// import { AuthContextadmin } from "./components/Context/AuthContext";
// import { AuthContext } from "./BookingApp/Context/AuthContext";

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
              <Route index element={<Home/>} />
              <Route exact path=":prodId" element={<ProductView/>} />
              <Route exact path="register" element={<Register/>} />

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

