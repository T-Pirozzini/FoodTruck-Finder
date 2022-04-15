// import { BrowserRouter, Routes, Route } from 'react-router-dom';

//styles
import './App.css';
//components
import Map from './components/Map';
import TruckCard from './components/TruckCard';
import Nav from './components/Nav'

function App() {  

  return (
    
    <div className="App">    
      
      <Nav />      

      <TruckCard />
      <Map />
    </div>
  );
}

export default App;
