import './Signup.css'
import { useState } from 'react'
// import MyTruckLocationMap from "./MyTruckLocation"

// MUI Component Imports
import {Select, InputLabel, FormControl, MenuItem, Stack} from '@mui/material';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

// components

export default function SignUpATruck(props) {
  const [name, setName] = useState('')
  const [info, setInfo] = useState('')  

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("name", name)
    const lat = props.cords[0]
    const lng = props.cords[1]
    const dayLocation = props.dayLocation
    const rating = 5
    const attributes = {name, info, rating, lat, lng, dayLocation}
    console.log("Fetched")
    console.log("props", props)   

    fetch("http://localhost:3002/signup",{
      method:"POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(attributes)      
    
    }).then(() => {
      console.log("Truck Registered");
    })
  }

  // let week = ["err", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

  // const updateDay = ((e, value) =>
  //  {
  //   console.log("currentDay", value)
  //   console.log("Day of Week:", week[value])
  //   setLocation(week[value])
  //  })

  return (       
    <form  onSubmit={handleSubmit} className="registration-form">
      <h2 className='registration-components'>Register Your FoodTruck</h2>
      <label className='registration-components name-of-truck'>
        <span>Name of you're truck:</span>
        
        <input 
        // type="email"
        onChange={(e) => setName(e.target.value)}
        value={name} 
        />        
      </label>      
      
      {/* Drop Down Info */}
      <FormControl fullWidth  className='registration-components'>
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
      
      <div className="lat-long-container">
        <label>
          <span>Latitude:</span>
          {props.cords[0]}
        </label>
        <label>
          <span>Longitude:</span>
          {props.cords[1]}
        </label>
      </div>

      {/* Table */}
      
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>{props.dayLocation[1].lat}</td>
            <td>{props.dayLocation[1].lng}</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>{props.dayLocation[2].lat}</td>
            <td>{props.dayLocation[2].lng}</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>{props.dayLocation[3].lat}</td>
            <td>{props.dayLocation[3].lng}</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>{props.dayLocation[4].lat}</td>
            <td>{props.dayLocation[4].lng}</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>{props.dayLocation[5].lat}</td>
            <td>{props.dayLocation[5].lng}</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>{props.dayLocation[6].lat}</td>
            <td>{props.dayLocation[6].lng}</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>{props.dayLocation[7].lat}</td>
            <td>{props.dayLocation[7].lng}</td>
          </tr>
        </tbody>
      </table>
      

      {/* Submit Button */}
      <div className="signup-btn"> 
        <Stack direction="row" spacing={2}>       
          <Button className="submit-btn" type="submit" variant="contained" endIcon={<SendIcon />}>Submit</Button>
        </Stack>
      </div> 

      {/* <button className="submit-btn" type="submit">Submit</button>       */}
    </form>
             
  )
}