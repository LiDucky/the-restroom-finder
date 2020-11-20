import React, {useEffect, useState} from 'react';
import L from "leaflet";
import axios from 'axios';
import Map from '../components/Map';
import SearchBar from '../components/SearchBar';

const Main = () => {
    const [filteredList, setFilteredList] = useState([])
    const [search, setSearch] = useState({
        latitude: "37.871576",
        longitude: "-122.273029",
        radius: "2",
        changing_table: true,
        unisex: true,
        accessible: true,
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
            profile: 'foot'
        })
    })

    const changeHandler = e => {
        if (e.target.name === "unisex" || e.target.name === "changing_table" || e.target.name === "accessible"){
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
        console.log(e.target)
        
    };
    const submitHandler = e => {
        e.preventDefault();
        axios.get(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=50&offset=0&lat=${search.latitude}&lng=${search.longitude}`)
            .then(response => {
                // console.log(response.data)
                console.log(`latitude: ${search.latitude}, longitude: ${search.longitude}, radius: ${search.radius}, gender: ${search.unisex}, changing table: ${search.changing_table}, accessible: ${search.accessible}`)
                setDatalist(response.data);
                console.log(datalist)
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
                filteredList={filteredList}

            />
        </>
        
    )
}
export default Main;