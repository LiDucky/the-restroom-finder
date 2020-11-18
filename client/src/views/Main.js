import React from 'react'
import {useEffect, useState} from 'react'
import {navigate} from '@reach/router'
import axios from 'axios';
import Map from '../components/Map'
import SearchBar from '../components/SearchBar'



const Main = props => {
    const [search, setSearch] = useState({
        latitude: "37.871576",
        longitude: "-122.273029"
    });
    // const {latitude, longitude} = search;

    const [datalist, setDatalist] = useState([]);


    useEffect(()=> {
        axios.get('https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=50&offset=0&lat=37.871576}&lng=-122.27302')
        .then(response => {
            console.log(response.data)
            setDatalist(response.data)
        })
        .catch(err => console.log("bad"))
    }, [])


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
                console.log('submitHandler clicked')
                console.log(response.data);
                const newlist = datalist.filter(item => {
                    return item.id != search.id})
                setDatalist(newlist)
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
            />
        </>
        
    )
}
export default Main;