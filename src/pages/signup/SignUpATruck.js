import './Signup.css'
import { useState } from 'react'
import { Link } from 'react-router-dom';
// import MyTruckLocationMap from "./MyTruckLocation"
import { useNavigate } from "react-router-dom";

// MUI Component Imports
import {Select, InputLabel, FormControl, MenuItem, Stack} from '@mui/material';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

// components

export default function SignUpATruck(props) {
  const [name, setName] = useState('')
  const [info, setInfo] = useState('')  
  const navigate = useNavigate();

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
      console.log(`New Url has been set for ${name}`);     
      props.setUrl("http://localhost:3002/trucks")     
    }).then(() => {
      console.log(`redirect`)
      navigate("/")      
    }).catch ((err)=>{
      console.log(err)
    })    
  }

  let dayObj = {
    monday: "day",
    tuesday: "day",
    wednesday: "day",
    thursday: "day",
    friday: "day",
    saturday: "day",
    sunday: "day",
  }
  
  let highlighted = "day" 
  for (let day in dayObj) {
  if(props.selectedDay === day) {
    dayObj[day] = "day-selected"
  }
}

  return (       
    <form  onSubmit={handleSubmit} className="registration-form">
      <div className='registration-title'>Food Truck Registration</div>
      <label className='name-of-truck'>
        <span>Name Your Truck:</span>
        
        <input 
        // type="email"
        id="truck-input"
        onChange={(e) => setName(e.target.value)}
        value={name} 
        />        
      </label>      
      
      {/* Drop Down Info */}
      <div className="dropdown-container">
        <FormControl fullWidth>
          
            <InputLabel><div className="text">Your truck specializes in</div></InputLabel>
         
          <div id="input-options">
            <Select          
              id="info-items"
              value={info}          
              onChange={(e) => setInfo(e.target.value)}                 
            >
              <MenuItem value={"coffee"}>Coffee</MenuItem>
              <MenuItem value={"potato"}>Potatos</MenuItem>
              <MenuItem value={"bbq"}>BBQ</MenuItem>
              <MenuItem value={"nachos"}>Nachos</MenuItem>
              <MenuItem value={"dessert"}>Dessert</MenuItem>
              <MenuItem value={"burgers"}>Burgers</MenuItem>
            </Select>
          </div>
        </FormControl>
      </div>

      <div className="table-container">     
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={dayObj.monday}>Monday</td>
              <td>{props.dayLocation[1].lat}</td>
              <td>{props.dayLocation[1].lng}</td>
            </tr>
            <tr>
              <td className={dayObj.tuesday}>Tuesday</td>
              <td>{props.dayLocation[2].lat}</td>
              <td>{props.dayLocation[2].lng}</td>
            </tr>
            <tr>
              <td className={dayObj.wednesday}>Wednesday</td>
              <td>{props.dayLocation[3].lat}</td>
              <td>{props.dayLocation[3].lng}</td>
            </tr>
            <tr>
              <td className={dayObj.thursday}>Thursday</td>
              <td>{props.dayLocation[4].lat}</td>
              <td>{props.dayLocation[4].lng}</td>
            </tr>
            <tr>
              <td className={dayObj.friday}>Friday</td>
              <td>{props.dayLocation[5].lat}</td>
              <td>{props.dayLocation[5].lng}</td>
            </tr>
            <tr>
              <td className={dayObj.saturday}>Saturday</td>
              <td>{props.dayLocation[6].lat}</td>
              <td>{props.dayLocation[6].lng}</td>
            </tr>
            <tr>
              <td className={dayObj.sunday}>Sunday</td>
              <td>{props.dayLocation[7].lat}</td>
              <td>{props.dayLocation[7].lng}</td>
            </tr>
          </tbody>
        </table>
      </div> 
      

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