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
    const filteredList = [];
    for (let i=0; i<datalist.length-1; i++){
        if (datalist[i].distance <+ search.radius){
            if (search.unisex == true && datalist[i].unisex == true){
                filteredList.push(datalist[i])
            }
            if (search.changing_table == true && datalist[i].changing_table == true){
                filteredList.push(datalist[i])
            }
            if (search.accessible == true && datalist[i].accessible == true){
                filteredList.push(datalist[i])
            }
        }
    }
    console.log(`this is the filteredList:`, filteredList)




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
                        // if(item.distance <= search.radius) {
                        //     if (search.unisex==item.unisex || search.changing_table==item.changing_table || search.accessible==item.accessible){

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
                        //     }
                        // }
                    })
                }
                <LocationMarker/>

            </MapContainer>
        
    )
}
export default Map;
