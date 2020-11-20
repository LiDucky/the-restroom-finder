import { useMap } from "react-leaflet";

const Route = props => {
    const map = useMap();
    const {routeMade, allRoute} = props;

    if(routeMade){
        allRoute.addTo(map);
    }

    return null;
};

export default Route;