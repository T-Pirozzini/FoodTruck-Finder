import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

//styles
import "./App.css";

//components
import Map from "./components/Map";

import Nav from "./components/Nav";

//pages
import Login from './pages/login/Login'
import MyTruckLocation from './pages/signup/MyTruckLocation'

function  App() {
  const [url, setUrl] = React.useState("http://localhost:3002/trucks");
  const [points,setPoints] = React.useState({})
  const { data: pins } = useFetch(url);
  
  useEffect(()=> {
    console.log("pins",pins)
    pins.map((pin) => pin.expand = false)
    setPoints(pins)
  }, [pins])
  
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />              
        <Routes>
          <Route exact path="/" element={<Map pins={points} setPoints={setPoints} setUrl={setUrl} />}/>
          <Route path="/signup" element={<MyTruckLocation/> }/>          
          <Route path="/login" element={<Login /> }/>                      
        </Routes>
      </BrowserRouter>     
   
    </div>
  );
}

export default App;
