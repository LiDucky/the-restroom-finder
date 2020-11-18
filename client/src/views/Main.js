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
    const [center, setCenter] = useState([37.871576, -122.273029])


    // useEffect(()=> {
    //     axios.get('https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=50&offset=0&lat=37.871576&lng=-122.273029')
    //     .then(response => {
    //         setDatalist(response.data)
    //     })
    //     .catch(err => console.log("bad"))
    // }, [])


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
                console.log(response.data)
                console.log(`latitude: ${search.latitude}, longitude: ${search.longitude}`)
                setDatalist(response.data);
                setCenter([search.latitude, search.longitude])
                navigate('/')
            })
            .catch(err => console.log(err))

        setSearch({
            latitude: "",
            longitude: ""
        });
    };

    return(
        <>
            <SearchBar
                changeHandler = {changeHandler}
                submitHandler = {submitHandler}
                search = {search}
            />
            <Map
                datalist={datalist}
                search={search}
                center={center}
            />
        </>
        
    )
}
export default Main;