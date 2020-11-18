import React, {useEffect, useState} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';
import Map from '../components/Map';
import SearchBar from '../components/SearchBar';

const Main = () => {
    
    const [search, setSearch] = useState({
        latitude: "37.871576",
        longitude: "-122.273029"
    });

    // const {latitude, longitude} = search;

    const [datalist, setDatalist] = useState([]);

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

        setSearch({
            latitude: "",
            longitude: ""
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
                search={search}
            />
        </>
        
    )
}
export default Main;