import React, { useState } from 'react';
import {TileLayer, MapContainer, Marker, useMapEvents} from 'react-leaflet';
import MarkerPopup from './MarkerPopup'
import 'leaflet-routing-machine';
import Route from './Route';


const Map = props => {
    const {search, datalist, setPersonLocation, setRestroomLocation, allRoute, routeMade, setRouteMade} = props;
    const center = [37.871576, -122.273029];
    const [needToGetLocation, setNeedToGetLocation] = useState(true);
    const zoom = 14;

    function LocationMarker() {
        const [position, setPosition] = useState(null);
        const map = useMapEvents({
            click() {
                if(needToGetLocation) {
                    map.locate();
                    setNeedToGetLocation(false);
                }
                if(routeMade) {
                    setRouteMade(false)
                    allRoute.remove();
                }
            },
            locationfound(e) {
                setPosition(e.latlng)
                setPersonLocation(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
            }
        })

        return null;
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
                            if(search.unisex && item.unisex==false){
                                return null;
                            }
                            if(search.changing_table && item.changing_table==false){
                                return null;
                            }
                            if(search.accessible && item.accessible==false){
                                return null;
                            }
                            // if ((search.unisex==true && item.unisex==true) || (search.changing_table==true && item.changing_table==true) || (search.accessible==true && item.accessible==true)){
                                // console.log(item)
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
                                                eventHandlers={{
                                                    if(routeMade){
                                                        setRouteMade(false)
                                                        allRoute.remove();
                                                    }
                                                }}
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
                            //}
                        }
                    })
                }
                <LocationMarker/>

            </MapContainer>
        
    )
}
export default Map;


