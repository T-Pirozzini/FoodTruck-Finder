import React from "react";
import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Tooltip,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import SideNav from "./SideNav";
import Schedule from "./Schedule";
import ControlledCarousel from "./Carousel";
import { Link } from "react-router-dom";

//styles
import "./Map.css";
import "leaflet/dist/leaflet.css";

const truckIcon = new L.Icon({
  iconUrl: require("../assets/food-truck.png"),
  popupAnchor: [1, -1],
  iconSize: [55, 55],
});

export default function Map(props) {
  const [expand, setExpand] = useState(false);
  const [day, setDay] = useState("monday");

  const updatePoints = (truck) => {
    const array_copy = props.pins.map((element) => {
      if (element.id === truck.id && element.expand === false) {
        element.expand = true;
      } else {
        element.expand = false;
      }
      return element;
    });
    props.setPoints(array_copy);
  };

  return (
    <>
      <div className="map-container">
        <Schedule setUrl={props.setUrl} setDay={setDay} day={day} />
        <MapContainer
          center={[53.5456, -113.4903]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; "<a href=  `© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>`");'
            url={
              "https://api.mapbox.com/styles/v1/tpirozzini/cl29e9qcl000115n0dxc7a0i7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidHBpcm96emluaSIsImEiOiJjbDI5ZTVnbXAwZnUzM2tydGF6aW5xaHR3In0.tSzKVLnd-wE5MYRZ9Qfbhw"
            }
          />
          {props.pins.map((truck) => {
            return (
              <Marker
                key={truck.id}
                position={[truck.location_lat, truck.location_lng]}
                icon={truckIcon}
                eventHandlers={{
                  click: (e) => {
                    {
                      updatePoints(truck);
                    }
                  },
                }}
              >
                <Tooltip direction="right" offset={[20, 5]} permanent>
                  {truck.truck_name}
                </Tooltip>
                <Popup>
                  <h3>{truck.truck_name}</h3>

                  <div className="image-container">
                    <ControlledCarousel
                      image1={truck.image1}
                      image2={truck.image2}
                      image3={truck.image3}
                    />
                  </div>
                  <button>
                    <Link to="/menu">Submit Order</Link>
                  </button>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
        <SideNav setUrl={props.setUrl} day={day} />
      </div>
    </>
  );
}
