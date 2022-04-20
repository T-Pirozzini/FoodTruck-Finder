import styles from './Signup.module.css'
import { useState } from 'react'
// import MyTruckLocationMap from "./MyTruckLocation"


export default function SignUpATruck(props) {
  const [name, setName] = useState('')
  const [info, setInfo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("name", name)
    const lat = props.cords.lat
    const lng = props.cords.lng
    const rating = 5
    const attributes = {name, info, rating , lat, lng}

    fetch("http://localhost:3002/signup",{
      method:"POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(attributes)
    
    }).then(() => {
      console.log("Truck Registered");
    })
  }

  return (
    <form onSubmit={handleSubmit}  className={styles['login-form']}>
      <h2>Register Your FoodTruck</h2>
      <label>
        <span>Name:</span>
        <input 
        // type="email"
        onChange={(e) => setName(e.target.value)}
        value={name} 
        />        
      </label>

      <label>
        <span>Info:</span>
        <input 
       onChange={(e) => setInfo(e.target.value)} 
        value={info}
        /> 
      </label>
      <label>
        <span>Latitude:</span>
        {props.cords.lat}

      </label>
      <label>
        <span>Longitude:</span>
        {props.cords.lng}
      </label>
      <button className="btn" type="submit">Submit</button>

      
    </form>    
  )
}