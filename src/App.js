import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
//styles
import "./App.css";
//components
import Map from "./components/Map";
import TruckCard from "./components/TruckCard";
import Nav from "./components/Nav";

//pages
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

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
          <Route exact path="/" element={<Map pins={points} setPoints={setPoints} />}/>
          <Route path="/signup" element={<Signup /> }/>          
          <Route path="/login" element={<Login /> }/>                      
        </Routes>
      </BrowserRouter>
      

      {/* <TruckCard pins={pins} url={url} setUrl={setUrl} /> */}
      
    </div>
  );
}

export default App;
