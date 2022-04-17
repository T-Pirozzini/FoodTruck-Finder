// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import { useFetch } from "./hooks/useFetch";
//styles
import "./App.css";
//components
import Map from "./components/Map";
import TruckCard from "./components/TruckCard";
import Nav from "./components/Nav";

function App() {
  const [url, setUrl1] = React.useState("http://localhost:3002/hello");
  const { data: pins } = useFetch(url);
  return (
    <div className="App">
      <Nav />

      <TruckCard pins={pins} />
      <Map pins={pins} />
    </div>
  );
}

export default App;
