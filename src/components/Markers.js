// import client from "../data/elephantSQL";
// import axios from "axios";
// import { useState } from "react";
// import { Marker } from "@react-google-maps/api";

// function Markers() {
//   const [marker, setMarker] = useState(null);

//   axios
//     .get(
//       "postgres://udidwoil:DGDmiggnH2kuTTQiItJsg_4Pm5Hxuv4r@heffalump.db.elephantsql.com/udidwoil"
//     )
//     .then((res) => {
//       console.log(res);
//       const markers = res.data;
//       setMarker(markers);
//     })
//     .catch((error) => {
//       console.log(error);
//     });

//   return (
//     <div>
//       <ul>
//         {/* markers.map((marker) =>
//         {
//           <Marker
//             position={{ lat: marker.location_lat, lng: marker.location_lng }}
//           />
//         } */}
//         console.log("first")
//         )
//       </ul>
//     </div>
//   );
// }

// export default Markers;
