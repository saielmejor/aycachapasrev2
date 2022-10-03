import React, { useState } from "react";
import './Map.css'
import {
  GoogleMap,

  InfoWindow,

  LoadScript,

  MarkerF,
} from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 40.748109,
  lng: -73.850514,
};
function Map() {
  const [marker, setMarker] = useState(false);
  return (
    <> 
    <div className="map" id="location"> 
    <div className="map-container">

    <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY} >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={13}
            
            >
         <MarkerF position={center}   onClick={() => {
          setMarker(true);
        }}/>
       {marker && (
        <InfoWindow
          position={{ lat: 40.748109, lng: -73.850514 }}
          onCloseClick={() => {
            setMarker(false);
          }}
        >
          <div>
            <h2>Queens Night Market </h2>
            <p>
              {" "}
              Located at NEW YORK HALL OF SCIENCE FLUSHING MEADOWS CORONA PARK,
              QUEENS
            </p>
            <p>Open on Saturday from 5pm till 12pm</p>
          </div>
        </InfoWindow>
      )}
            </GoogleMap>
          </LoadScript>
    </div>
    
        <div className="map-description"> 
        <h1>Our Location</h1> 
        <p>Located at Queens Night Market outside of New York Hall of Science</p> 
        <p>4701 111th St, Queens, NY 11368</p> 
        <p style={{fontWeight:'bold'}}>Open Saturdays</p> 
        <p><span style={{fontWeight:'bold'}}> Hours: </span>5PM- 12PM </p> 
        <p style={{fontWeight:'bold'}}>April-October</p>
        </div>
    </div>
    </>
         
    
  );
}

export default Map;
