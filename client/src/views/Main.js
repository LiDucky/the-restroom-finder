import React, {useEffect, useState} from 'react';
import L from "leaflet";
import axios from 'axios';
import Map from '../components/Map';
import SearchBar from '../components/SearchBar';

const Main = () => {
    const [filteredList, setFilteredList] = useState([]);
    const [routeMade, setRouteMade] = useState(false);
    const [search, setSearch] = useState({
        radius: "2",
        changing_table: true,
        unisex: true,
        accessible: true,
    });
    const [newSearch, setNewSearch] = useState({
        radius: ""
    });
    const [datalist, setDatalist] = useState([]);
    const [restroomLocation, setRestroomLocation] = useState([]);
    const [personLocation, setPersonLocation] = useState({lat:"37.871576",lng:"-122.273029"});

    const allRoute = L.Routing.control({
        waypoints: [
            personLocation,
            restroomLocation
        ],
        router: new L.Routing.osrmv1({
            profile: 'foot'
        })
    })

    const changeHandler = e => {
        if (e.target.name === "latitude" || e.target.name === "longitude"){
            setPersonLocation({
                ...personLocation,
                [e.target.name]:e.target.value
            })
        }
        else if (e.target.name === "unisex" || e.target.name === "changing_table" || e.target.name === "accessible"){
            setSearch({
                ...search,
                [e.target.name]: e.target.checked
            })
        } else {
            setSearch({
                ...search,
                [e.target.name]: e.target.value
                
            })
        }
        
    };
    const submitHandler = e => {
        e.preventDefault();
        if(routeMade) {
            setRouteMade(false)
            allRoute.remove();
        }
        axios.get(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=50&offset=0&lat=${personLocation.lat}&lng=${personLocation.lng}`)
            .then(response => {
                // console.log(response.data)
                console.log(`latitude: ${personLocation.lat}, longitude: ${personLocation.lng}, radius: ${search.radius}, gender: ${search.unisex}, changing table: ${search.changing_table}, accessible: ${search.accessible}`)
                setDatalist(response.data);
                // const newlist=[];
                // for (let i=0; i<datalist.length-1; i++){
                //     if (search.unisex===true && datalist[i].unisex===true){
                //         newlist.push(datalist[i])
                //     } else if (search.changing_table===true && datalist[i].changing_table===true){
                //         newlist.push(datalist[i])
                //     } else if (search.accessible===true && datalist[i].unisex===true){
                //         newlist.push(datalist[i])
                //     }
                // }
                // console.log(`newlist:`, newlist)
            })
            .catch(err => console.log(err))
        // setPersonLocation([search.latitude, search.longitude])
        setNewSearch(search);
        setSearch({
            latitude: "",
            longitude: "",
            radius: ""
        });
    };



    return(
        <>
            {/* <div className="topMenu">
                <div className="menuButton">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor"></svg>
                </div>
            </div> */}
            <SearchBar
                changeHandler = {changeHandler}
                submitHandler = {submitHandler}
                search = {search}
                personLocation = {personLocation}


            />
            <Map
                datalist={datalist}
                search={newSearch}
                setRestroomLocation={setRestroomLocation}
                allRoute={allRoute}
                filteredList={filteredList}
                setPersonLocation={setPersonLocation}
                routeMade={routeMade}
                setRouteMade={setRouteMade}
            />
        </>
        
    )
}
export default Main;