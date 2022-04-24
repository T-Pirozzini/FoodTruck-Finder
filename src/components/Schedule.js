import React, { useState } from 'react'
import { Pagination, Typography, Stack, ThemeProvider } from '@mui/material';

// styles
import "./Schedule.css"

export default function Schedule(props) {
  const [day, setDay] = useState("monday");

  let week = ["err", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

  const handleChange = ((e, value) => 
    {
    props.setUrl(`http://localhost:3002/trucks/${week[value]}`)
    setDay(week[value])
  }) 

  return (   
    <>
    <div className="schedule-container">   
      <div className="schedule">          
        <Stack spacing={1}>
          <Typography>{day.toUpperCase()}</Typography>         
          <Pagination count={7} value={day} onChange={handleChange} size='medium' variant="text" color="primary" />      
        </Stack>          
      </div>
    </div>     
    </>    
  )
}
