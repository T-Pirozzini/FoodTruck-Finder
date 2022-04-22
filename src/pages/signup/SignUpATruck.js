import './Signup.css'
import { useState } from 'react'
// import MyTruckLocationMap from "./MyTruckLocation"

// MUI Component Imports
import {Select, InputLabel, FormControl, MenuItem} from '@mui/material';
import { Pagination, Typography, Stack } from '@mui/material';
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

      <div className="signup-schedule">
        <Stack spacing={1}>
          <Typography>SCHEDULE</Typography>         
          <Pagination count={7} size='small' variant="text" color="secondary" />      
        </Stack>
      </div>  
      
      <label className='registration-components'>
        <span>Latitude:</span>
        {props.cords[0]}
      </label>
      <label className='registration-components'>
        <span>Longitude:</span>
        {props.cords[1]}
      </label>

      {/* Submit Button */}
      <div className="signup-sched"> 
        <Stack direction="row" spacing={2}>       
          <Button className="submit-btn" type="submit" variant="contained" endIcon={<SendIcon />}>Submit</Button>
        </Stack>
      </div> 

      {/* <button className="submit-btn" type="submit">Submit</button>       */}
    </form>
             
  )
}