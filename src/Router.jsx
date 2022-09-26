import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Cart from "./containers/Cart";
import Home from "./containers/Home";
import Shipping from "./containers/Shipping";
import Signin from "./containers/Signin";
import SignUp from "./containers/SignUp";
import OrderConfirmation from "./containers/Thankyou";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/signin"} element={<Signin />} />
          <Route path={"/cart"} element={<Cart/>} />
          <Route path={"/shipping"} element={<Shipping/>} />
          <Route
          
            path={"/Thankyou"}
            element={<OrderConfirmation/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
