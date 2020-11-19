import React, {useEffect, useState} from 'react';
import L from "leaflet";
import axios from 'axios';
import Map from '../components/Map';
import SearchBar from '../components/SearchBar';

const Main = () => {
    
    const [search, setSearch] = useState({
        latitude: "37.871576",
        longitude: "-122.273029",
        radius: "2"
    });
    const [newSearch, setNewSearch] = useState({
        latitude: "",
        longitude: "",
        radius: ""
    });
    const [datalist, setDatalist] = useState([]);
    const [restroomLocation, setRestroomLocation] = useState([]);
    const [personLocation, setPersonLocation] = useState(["37.871576", "-122.273029"]);

    const allRoute = L.Routing.control({
        waypoints: [
            personLocation,
            restroomLocation
        ],
        router: new L.Routing.osrmv1({
            profile: 'foot' //doesn't seem to be changing time?
        })
    })

    const changeHandler = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    };
    const submitHandler = e => {
        e.preventDefault();
        axios.get(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=50&offset=0&lat=${search.latitude}&lng=${search.longitude}`)
            .then(response => {
                setDatalist(response.data);
            })
            .catch(err => console.log(err))
        setPersonLocation([search.latitude, search.longitude])
        setNewSearch(search);
        
        setSearch({
            latitude: "",
            longitude: "",
            radius: ""
        });
    };

    return(
        <>
            <div className="topMenu">
                <div className="menuButton">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor"></svg>
                </div>
            </div>
            <SearchBar
                changeHandler = {changeHandler}
                submitHandler = {submitHandler}
                search = {search}
            />
            <Map
                datalist={datalist}
                search={newSearch}
                setRestroomLocation={setRestroomLocation}
                allRoute={allRoute}
            />
        </>
        
    )
}
export default Main;