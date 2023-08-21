import React from 'react'
import './CartItems.css'
const CartItems:React.FC<Number> = (itemCount) => {
    return (
        <div className="cart-container">
            <p className="cart-text">Cart: {Number(itemCount)} items</p>
        </div>
    )
}

export default CartItems