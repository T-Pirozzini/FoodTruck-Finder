import {Elements} from '@stripe/react-stripe-js';
import StripeCheckout from "react-stripe-checkout"
import { useState } from 'react';
// require("dotenv").config();
import { useNavigate } from "react-router-dom";

// sweet alert
// import swal from 'sweetalert';
import Swal from 'sweetalert2'




// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.


export default function Stripe(props) {
  const [product,setProduct] = useState({
    name: "buy food",
    price: 10,
    productBy:"us"
    
  })
  const navigate = useNavigate();

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
      console.log("response", res)
      // props.setUrl("http://localhost:3002/trucks")
      navigate("/")
       
    }).then((res) => {
      Swal.fire({
        position: 'center-center',
        icon: 'success',
        title: 'Payment Received!',
        showConfirmButton: false,
        timer: 3500
      })
    }).catch((err) => {
      console.log(err)
    })
  }


  return (

    <StripeCheckout 
    stripeKey="pk_test_51KlK35DzKwWre22N3YsmHaXDhnTy33YXdcliEbDAnx7EEbFs3lCedAcj8ZZoN8hLc550S9X9H8ls9Exnq422CG1600Wyfa2aLV"
    token={makePayment}
    name="Pay For Food!"
    amount={props.price} 
    /> 
  )
};