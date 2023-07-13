import { useSelector, useDispatch } from "react-redux";
import { removefromCart } from "./redux/cartSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
//import SubTotal from "./SubTotal";

function Checkout(item,product) {
  const cartItems = useSelector((state) => state.cart.cart);
   
  const dispatch = useDispatch();
  var totalCartPrice = 0;
  const [quantity,setQuantity] = useState(1);
  return (
    <div className="cart-full">
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <div className="container-fluid">
          <a className="navbar-brand" href="/register">
            ORDER
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
              <GiShoppingCart style={{ color: "darkblack" }} size={32} />
              <strong>{cartItems.length}</strong>
              {/*<small>{cartItems.length}</small>
              <a className="nav-link active" aria-current="page" href="/checkout">
                Cart
              </a>*/}
              <Link to="/items">
                <h5 className="cart-color">cart</h5>
              </Link>
              <a
                className="nav-link active"
                aria-current="page"
                href="/payment"
              >
                <h5 className="checkout-payment"> Payment</h5>
              </a>
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
              >
                <h5>Logout</h5>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="cart-select">
        <h1 className="card-checkout">Selected Products.</h1>
      </div>
      {cartItems.map((item) => {
        totalCartPrice += item.price *quantity;
        const base64String = btoa(
          String.fromCharCode(...new Uint8Array(item.image))
        );
        return (
          <div className=" d-flex checkout-card">
            <img
              src={`data:img/png;base64,${base64String}`}
              alt=""
              className="cart-img-size"
            />
            <div className="d-flex flex-direction justify-content-row">
              <h4 className="cart-title">{item.title}</h4>
              <p className="cart-price">₹ {item.price}</p>
              <p className="item-quantity">
                <button className="qty-btn" onClick={() =>setQuantity(quantity+1)}>+</button>
                 Quantity:{quantity}
                <button className="qty-btn" onClick={() =>setQuantity(quantity-1)}>-</button>
                {/*<input
                  type="number"
                  className="item-quantity-input"
              
                  onChange={(e) => setQuantity(Number(e.target.value))}
        />*/}
              </p>
              <button
                className="btn btn-danger cart-button"
                onClick={() => dispatch(removefromCart({ _id: item._id }))}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <div>
        <div className="card-total">
          <h1 className="total-head">Cart Total:{totalCartPrice}</h1>
          <Link to="/payment">
            <button className="total-button">Proced To Pay</button>
          </Link>
        </div>
        {/*<SubTotal/>*/}
      </div>
    </div>
  );
}

export default Checkout;
