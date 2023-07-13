import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { useSelector } from "react-redux";
import { addtoCart } from "./redux/cartSlice";
import { GiShoppingCart } from "react-icons/gi";
//import { message } from "antd";

const Items = (title,price) => {
  const [data, setData] = useState([]);
  const [quantity, setQuantity] = useState(0);
   const dispatch=useDispatch()
   const cartItems=useSelector(state=>state.cart.cart)
  useEffect(() => {
    axios
      .get("http://localhost:5000/img")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err,"It has an error"));
  });
  return (
    <div className="klop">
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/register"><h5>ORDER</h5>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <br />
              <br />
              <GiShoppingCart style={{color:"darkblack"}}size={32}/>
              <strong>{cartItems.length}</strong >
              {/*<small>{cartItems.length}</small>
              <a className="nav-link active" aria-current="page" href="/checkout">
                Cart
              </a>*/}
              <Link to="/checkout"><h5 className="cart-color">cart</h5></Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                 width="22"
                height="39"
                padding-left="5px"
                className="bi bi-box-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                />
              </svg>
              <a
                className="nav-link active"
                aria-current="page"
                href="/login"
                onClick={() => localStorage.removeItem("token")}
              ><h5>Logout</h5>
              </a>
             
            </div>
          </div>
        </div>
      </nav>
      <div>
        <h2 className="items-heading">Products Page</h2>
        {/*<input type="text" className="items-search"/>
        <button className="items-searchbtn">Search</button>*/}
      </div>
      <div className="lkf d-flex flex-row justify-content-center">
        {data.map((item) => {
          const base64String = btoa(
            String.fromCharCode(...new Uint8Array(item.picture.data))
          );
          return (
            <div className="card d-flex flex-row">
              <div>
                <img
                  src={`data:img/png;base64,${base64String}`}
                  alt="123213"
                  className="imagesset"
                  width="150"
                  height="130"
                />
              </div>
              <div className="d-flex flex-column">
                <h5 className="item-title">{item.title}</h5>
                <h5>{item._id.disabled}</h5>
                <p className="item-price">Price:{item.price}/-Rs</p>
                <div className="d-flex flex-row">
                  <p className="item-quantityy">
                    Quantity:-{""}
                    <input
                      type="number"
                      className="item-quantity-inputt"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    />
          </p>
                  <Link to="/payment"><button className="item-order btn btn-success m-1">Order</button></Link>
                </div>
                  <button className="item-cart" onClick={()=>dispatch(addtoCart({_id:item._id,image:item.picture.data,title:item.title,price:item.price,quantity:item.quantity}))}>Add To Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Items;
