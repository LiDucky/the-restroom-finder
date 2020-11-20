import React, { useState } from 'react';
import {TileLayer, MapContainer, Marker,useMapEvents, Popup} from 'react-leaflet';
import MarkerPopup from './MarkerPopup'
import 'leaflet-routing-machine';
import Route from './Route';


const Map = props => {
    const {datalist, setPersonLocation, setRestroomLocation, allRoute} = props;
    const center = [37.871576, -122.273029];
    const [routeMade, setRouteMade] = useState(false);
    const zoom = 14;

    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                setPosition(e.latlng)
                setPersonLocation(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
            },

        })

        return position === null ? null : (
            <Marker position={position}>
                <Popup>You are here</Popup>
            </Marker>
        )
    }
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
            <Route routeMade={routeMade} allRoute={allRoute}/>

                {
                    datalist.map((item, i)=>{
                        if(item.distance <= search.radius) {
                            if (search.unisex==item.unisex || search.changing_table==item.changing_table || search.accessible==item.accessible){
                            
                                return(
                                    <>
                                        <Marker key = {i} 
                                            position = {[item.latitude, item.longitude]}
                                            eventHandlers={{
                                                click: () => {
                                                    setRestroomLocation([item.latitude, item.longitude]);
                                                    setRouteMade(true)
                                                    allRoute.remove()
                                                },
                                            }}
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
                        }
                    })
                }
                <LocationMarker/>

            </MapContainer>
        
    )
}
export default Map;
