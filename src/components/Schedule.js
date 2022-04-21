import React, { useState } from 'react'
import { Pagination, Typography, Stack, ThemeProvider } from '@mui/material';

// styles
import "./Schedule.css"

export default function Schedule(props) {
  const [day, setDay] = useState("Monday");
  // const [weekday, setWeekday] = useState('Monday')
  // console.log(weekday)
  let week = ["err","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const handleChange = ((e, value) =>  
    {setDay(week[value])
      console.log("CLICK", e)
      props.setUrl(`http://localhost:3002/trucks/${day}`)}    
  )  

  return (   
    <> 
    <div className="schedule">          
      <Stack spacing={1}>
        <Typography>{day}</Typography>         
        <Pagination count={7} value={day} onChange={ handleChange } size='medium' variant="text" color="primary" />      
      </Stack>          
    </div>
    <div className="filter-schedule">           
             
    </div>
    </>    
  )
}
