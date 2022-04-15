database
// import { BrowserRouter, Routes, Route } from 'react-router-dom';



//styles
import './App.css';
//components
import MyComponent from './components/Map';
import TruckCard from './components/TruckCard';

function App() {  

  return (
    
    <div className="App" style={{width: "100%", height: "100%", margin: "10px"}}>      
      
      

      Foodtruck
      <TruckCard />
      <MyComponent />
    </div>
  );
}

export default App;
