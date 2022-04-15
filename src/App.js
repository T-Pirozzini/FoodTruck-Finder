import { BrowserRouter, Routes, Route } from 'react-router-dom';

//styles
import './App.css';
//components
import Map from './components/Map';
import TruckCard from './components/TruckCard';
import Nav from './components/Nav'

function App() {  

  return (
    
    <div className="App" style={{width: "100%", height: "100%", margin: "10px"}}>    
      
      <Nav />      
      <TruckCard />
      <Map />
    </div>
  );
}

export default App;
