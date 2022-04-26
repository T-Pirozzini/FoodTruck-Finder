import React, { useState } from 'react'
import { Pagination, Typography, Stack, ThemeProvider } from '@mui/material';

// styles
import "./Schedule.css"

export default function Schedule(props) { 
  let week = ["err", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

  const handleChange = ((e, value) => 
    {
    props.setUrl(`http://localhost:3002/trucks/${week[value]}`)
    props.setDay(week[value])
  }) 

  return (   
    <>
    <div className="schedule-container">   
      <div className="schedule">          
        <Stack spacing={1}>
          <Typography><div className="week-day">{props.day.toUpperCase()}</div></Typography>         
          <Pagination count={7} value={props.day} onChange={handleChange} size='large' variant="text" color="primary" />      
        </Stack>          
      </div>
    </div>     
    </>    
  )
}
