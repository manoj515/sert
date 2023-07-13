import React from 'react';
import { useSelector } from 'react-redux';
//import { getTotal } from './redux/store';

const SubTotal = () => {
    const cartItems=useSelector(state=>state.cart.cart)
  return (
    <div className="subtotal">
        <div className='subtotal_area'>
            <p>Subtotal({cartItems.length}items):{}</p>
            <button>Proceed to Pay</button>
        </div>
    </div>
  )
}

export default SubTotal
