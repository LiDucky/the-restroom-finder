import React from 'react';
import {TileLayer, MapContainer, Marker } from 'react-leaflet';
// import data from './safelist.json'
import axios from 'axios'
import {useEffect, useState} from 'react'
import MarkerPopup from './MarkerPopup'
import Main from '../views/Main'



const Map = props => {
    const {datalist} = props;
    const center = [37.871576, -122.273029];
    const zoom = 14;

    return(
            <MapContainer 
                center = {center}
                zoom = {zoom} 
                id = "berkeleyMap"
            >
                <TileLayer 
                    attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
                    url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker 
                    position = {[37.871576, -122.273029]}
                />
                {
                    datalist.map((item, i)=>(
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
                    ))
                }
            </MapContainer>
    )
}
export default Map;
