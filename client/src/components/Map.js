import React from 'react';
import {TileLayer, MapContainer, Marker} from 'react-leaflet';
import MarkerPopup from './MarkerPopup'
import 'leaflet-routing-machine';
import Route from './Route';


const Map = props => {
    const {datalist, search, setRestroomLocation, allRoute} = props;
    const center = [37.871576, -122.273029];
    const [routeMade, setRouteMade] = useState(false);
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
            <Route routeMade={routeMade} allRoute={allRoute}/>
            {
                datalist.map((item, i)=>{
                    if(item.distance <= search.radius) {
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
                })
            }
        </MapContainer>
    )
}
export default Map;
