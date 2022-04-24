import React, { useState } from 'react'

import SpanningTable from "./SpanningTable"
import Stripe from './Stripe';


const Menu = ({ items }) => {
 const [quantity, setQuantity] = useState(0);
 const [order,setOrder] = useState({})
 const [total, setTotal] = useState(0);

//  function subtotal(items) {
//   return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }


const updateQuantity = (e, price) => {
  // let priceArray = []
  // priceArray.push(price)
  console.log("e", e.target)
  console.log("PRICE", price);

  // const invoiceTotal = subtotal(priceArray);  
 
  // console.log("invoice Total", invoiceTotal)
  setTotal(total + price)
  console.log("Total", total)
}

const reduceQuantity = (e, price) => {
  // let priceArray = []
  // priceArray.push(price)
  console.log("e", e.target)
  console.log("PRICE", price);

  // const invoiceTotal = subtotal(priceArray);  
 
  // console.log("invoice Total", invoiceTotal)
  setTotal(total - price)
  console.log("Total", total)
}


// helper function to updat the total and then call this function inside of update quantity

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
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
              <button onClick={(event) => updateQuantity(event, price)}>Add to cart!</button>
              <label>Quantity:</label>           
              <input className="quantity" name="quantity" type="number" min="0" max="10" ></input>
              <button onClick={(event) => reduceQuantity(event, price)}>Remove from cart!</button>
            </div>
          </article>         
        )
      })}
        <section className="order-table">
        </section>           
        {total}                  
        <SpanningTable
          id="spanning-table"
          items = { items } 
        />
        <Stripe />
      
    </div>     
  )
  
}
 

export default Menu




