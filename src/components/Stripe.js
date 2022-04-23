import {Elements} from '@stripe/react-stripe-js';
import StripeCheckout from "react-stripe-checkout"
import { useState } from 'react';
// require("dotenv").config();

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.


export default function Stripe() {
  const [product,setProduct] = useState({
    name: "buy food",
    price: 10,
    productBy:"us"
    
  })

  const makePayment = token => {
    const body = {
      token,
      product
    }
    const headers={
      "content-type": "application/json"
    }

    return fetch("http://localhost:3002/trucks/checkout", {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then((res) => {
      console.log("responce", res)
    })
    
    .catch((err) => {
      console.log(err)
    })
  }


  return (

    <StripeCheckout 
    stripeKey="pk_test_51KlK35DzKwWre22N3YsmHaXDhnTy33YXdcliEbDAnx7EEbFs3lCedAcj8ZZoN8hLc550S9X9H8ls9Exnq422CG1600Wyfa2aLV"
    token={makePayment}
    name="buy"
    amount={product.price * 100} 
    /> 
  )
};