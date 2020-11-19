import React, {useState} from 'react';
import {TileLayer, MapContainer, Marker } from 'react-leaflet';
import 'leaflet-routing-machine';
import L from "leaflet";
import MarkerPopup from './MarkerPopup';
import Route from './Route';


const Map = props => {
    const {datalist, search} = props;
    console.log(search);
    console.log(datalist);
    const center = [37.871576, -122.273029];
    const zoom = 14;

    return(
            <MapContainer
                center = {center}
                zoom = {zoom} 
                id = "map"
            >
                <TileLayer 
                    attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
                    url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Route personLocation={center} restroomLocation={[37.874, -122.26]}/>
                <Marker position = {[37.871576, -122.273029]}/>
                {
                    datalist.map((item, i)=>{
                        if(item.distance <= search.radius) {
                            return(
                                <>
                                    <Marker key = {i} 
                                        position = {[item.latitude, item.longitude]} 
                                    >
                                        <MarkerPopup 
                                            name = {item.name} 
                                            changing_table = {item.changing_table} 
                                            accessible = {item.accessible} 
                                            unisex = {item.unisex} 
                                            street = {item.street}
                                            city = {item.city}
                                            state = {item.state}
                                        />
                                    </Marker>
                                </>
                            )
                        }
                    })
                }
            </MapContainer>
    )
}
export default Map;
