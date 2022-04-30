import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

//styles
import "./App.css";

//components
import Map from "./components/Map";
import Nav from "./components/Nav";

//pages
import Login from "./pages/login/Login";
import MyTruckLocation from "./pages/signup/MyTruckLocation";
import "leaflet/dist/leaflet.css";
import TruckMenu from "./pages/menus/TruckMenu";

function App() {
  const [url, setUrl] = React.useState("http://localhost:3002/trucks");
  const [points, setPoints] = React.useState({});
  const { data: pins } = useFetch(url);

  useEffect(() => {
    pins.map((pin) => (pin.expand = false));
    setPoints(pins);
  }, [pins]);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav setUrl={setUrl}  />

        <Routes>
          <Route
            exact
            path="/"
            element={<Map pins={pins} setPoints={setPoints} setUrl={setUrl} />}
          />
          <Route path="/signup" element={<MyTruckLocation setUrl={setUrl} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={<TruckMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
