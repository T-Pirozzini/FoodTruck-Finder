import styles from './Signup.module.css'
import { useState } from 'react'
// import MyTruckLocationMap from "./MyTruckLocation"
import {Select, InputLabel, FormControl, MenuItem} from '@mui/material';

export default function SignUpATruck(props) {
  const [name, setName] = useState('')
  const [info, setInfo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("name", name)
    const lat = props.cords[0]
    const lng = props.cords[1]
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
    <form  onSubmit={handleSubmit} className="registration-form">
      <h2>Register Your FoodTruck</h2>
      <label>
        <span>Name:</span>
        <input 
        // type="email"
        onChange={(e) => setName(e.target.value)}
        value={name} 
        />        
      </label>      
      
      {/* Drop Down Info */}
      <FormControl fullWidth >
        <InputLabel>Info:</InputLabel>
        <Select          
          id="info-items"
          value={info}          
          onChange={(e) => setInfo(e.target.value)}                 
        >
          <MenuItem value={"coffee"}>Coffee</MenuItem>
          <MenuItem value={"potato"}>Potato</MenuItem>
          <MenuItem value={"bbq"}>BBQ</MenuItem>
        </Select>
      </FormControl>
      
      <label>
        <span>Latitude:</span>
        {props.cords[0]}
      </label>
      <label>
        <span>Longitude:</span>
        {props.cords[1]}
      </label>
      <button className="submit-btn" type="submit">Submit</button>      
    </form>        
  )
}