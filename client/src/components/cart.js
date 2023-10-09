import React from "react";
import "./cart.css";
import NavBar from "./NavBar";

const Cart = () => {
    return (
        <div className="main">
            <NavBar />

            <div className="cart-item">
                <div className="c-image">
                    <div className="cart-image"></div>
                </div>
                <div className="content-2">
                    <div className="c-content-1">
                        <div className="cart-price-title">Price</div>
                        <div className="cart-price">R000000</div>
                    </div>
                    <div className="c-content-1">
                        <div className="cart-quantity-title">Quantity</div>
                        <div className="cart-quantity">1</div>
                    </div>
                    <div className="c-content-1">
                        <div className="cart-total-title">Subtotal</div>
                        <div className="cart-total">R000000</div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Cart;
