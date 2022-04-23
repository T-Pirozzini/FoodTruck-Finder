import React, { useState } from 'react'


const Menu = ({ items }) => {
 const [quantity, setQuantity] = useState(0);
 const [total, setTotal] = useState(0);

 const updateQuantity = (e, price) => {
  // console.log(e.target.value)   
  // setQuantity(e.target.value)
  console.log(price)
  setTotal(price*e.target.value)
  
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
              <label>Quantity:</label>           
              <input className="quantity" name="quantity" type="number" min="0" max="10" onChange={(event) => updateQuantity(event, price)}></input>
            </div>
          </article>         
        )
    
      })}
        <article className="order-total">
          {total}
        </article>       
          
    </div>     
  )
  
}
 

export default Menu




{/* <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button> */}