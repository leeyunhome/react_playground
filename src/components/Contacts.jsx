import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

require("dotenv").config();
const { MAP_KEY } = process.env;

const Contacts = ({ google }) => {
  const mapStyles = {
    width: "300px",
    height: "300px",
  };
  return (
    <div>
      <Map
        google={google}
        zoom={17}
        style={mapStyles}
        initialCenter={{ lat: 37.539784, lng: 126.894625 }}
      >
        <Marker position={{ lat: 37.539784, lng: 126.894625 }} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: MAP_KEY,
})(Contacts);
