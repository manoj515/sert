import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Checkout from "./Checkout.js";
import Order from "./Order";
import Payment from "./Payment";
import UserHome from "./UserHome";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
import Items from "./Items";
import Profile from "./Profile";
import { Provider } from "react-redux";
import store from "./redux/store";


const App = () => {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/createuser" element={<CreateUser/>} />
          <Route path="/updateuser/:id" element={<UpdateUser/>} />
          <Route path="/items" element={<Items/>} />
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
     </div>
  );
};

export default App;
