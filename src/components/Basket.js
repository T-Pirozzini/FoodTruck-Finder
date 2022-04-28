import React from "react";

//components
import Stripe from "./Stripe";

// styles
import "./MenuBasket.css";

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <div className="order-container">
      <aside className="block col-1">
        <h2>Current Order</h2>
        <div>
          {cartItems.length === 0 && <div>No items in order</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="col-2">{item.title}</div>

              {/* <div className="col-2">
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>{' '}
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
              </div> */}
              <div className="col-2 text-right">
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>{" "}
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
                {item.qty} x ${(item.price / 100).toFixed(2)}
              </div>
            </div>
          ))}

          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2">Items Price</div>
                <div className="col-1 text-right">
                  ${(itemsPrice / 100).toFixed(2)}
                </div>
              </div>
              <div className="row">
                <div className="col-2">Tax Price</div>
                <div className="col-1 text-right">
                  ${(taxPrice / 100).toFixed(2)}
                </div>
              </div>

              <div className="row">
                <div className="col-2">
                  <strong>Total Price</strong>
                </div>
                <div className="col-1 text-right">
                  <strong>${(totalPrice / 100).toFixed(2)}</strong>
                </div>
              </div>
              <hr />
              <div className="row">
                <Stripe price={totalPrice.toFixed(2)} />
              </div>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}
