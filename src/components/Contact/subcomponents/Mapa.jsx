import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class Mapa extends Component {
  state = {};
  render() {
    const mapStyles = {
      width: "90%",
      height: "70%",
      position: "relative",
      margin: "0 auto",
    };
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{ lat: 51.752415, lng: 18.142604 }}
      >
        <Marker position={{ lat: 51.752415, lng: 18.142604 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAxKis_7rqI8r4Nf_BdcdbauGDeIPoRJ5I",
})(Mapa);
