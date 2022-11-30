import React, { useState } from "react";
import Treadmills from "./Treadmills";

export default function cart(props) {
  const { cartItems } = props;
  return (
    <aside>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Cart Items</h2>
        </div>
      </div>
    </aside>
  );
}
