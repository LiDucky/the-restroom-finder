import { useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

const Route = props => {
    const  map  = useMap();
    // console.log(map);
    const {personLocation, restroomLocation} = props;

    useEffect(() => {
        L.Routing.control({
            waypoints: [
                personLocation,
                restroomLocation
            ],
            router: new L.Routing.osrmv1({
                profile: 'foot' //doesn't seem to be changing time?
            })
        }).addTo(map)
    });

    return null;
};

export default Route;