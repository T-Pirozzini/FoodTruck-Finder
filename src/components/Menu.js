import React, { useState } from 'react'

// components
import Stripe from './Stripe';
import Basket from './Basket';

// styles
import "./MenuBasket.css"

const Menu = ({ items }) => { 
 const [cartItems, setCartItems] = useState([]); 

  const onAdd = (product) => {
    const itemExists = cartItems.find((item) => item.id === product.id);
    if (itemExists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...itemExists, qty: itemExists.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const itemExists = cartItems.find((item) => item.id === product.id);
    if (itemExists.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...itemExists, qty: itemExists.qty - 1 } : item
        )
      );
    }
  };

  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, price, desc } = menuItem
        return (          
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${(price / 100).toFixed(2)}</h4>
              </header>
              <p className="item-text">{desc}</p>
              <button onClick={(() => {onAdd(menuItem)})}>Add to cart!</button>              
              <button onClick={(() => {onRemove(menuItem)})}>Remove from cart!</button>
            </div>
          </article>         
        )
      })}
        <section className="order-table">
        <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          ></Basket>               
          </section>           
       
     
      
    </div>     
  )  
}

export default Menu




