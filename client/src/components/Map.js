import React from 'react';
// import { render } from 'react-dom';
import {TileLayer, MapContainer, Marker, ZoomControl } from 'react-leaflet';

const Map = props => {
    const center = [37.8697494, -122.3017989];
    const zoom = 13;
    



    return(
        <MapContainer 
            zoomControl={false}
            style={{ height: "100%" }}
            center = {center}
            zoom = {zoom} 
            id = "berkeleyMap"
        >
            <ZoomControl position="topright"/>
            <TileLayer 
                attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
                url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker 
                position = {[37.8697494, -122.3017989]}
            />
        </MapContainer>


    )
}
export default Map;