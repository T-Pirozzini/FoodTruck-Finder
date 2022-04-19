// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
//styles
import "./App.css";

//components
import Map from "./components/Map";
import TruckCard from "./components/TruckCard";
import Nav from "./components/Nav";
// import Login from "./components/Login";

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
      {/* <BrowserRouter>
      
        <Routes>
          <Route path="/login">
            <Login />
          </Route> 
        </Routes>
      </BrowserRouter>      */}
      <Nav />
      

      {/* <TruckCard pins={pins} url={url} setUrl={setUrl} /> */}
      <Map pins={points} setPoints={setPoints} />
    </div>
  );
}

export default App;
