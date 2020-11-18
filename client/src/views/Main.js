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
    const [newSearch, setNewSearch] = useState({})

    const [datalist, setDatalist] = useState([]);


    useEffect(()=> {
        axios.get('https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=50&offset=0&lat=37.871576&lng=-122.273029')
        .then(response => {
            const datalist = response.data
            console.log(datalist)
            setDatalist(datalist)
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
                const newResults = datalist.filter(item => {
                    return item.id != newSearch.id})
                setNewSearch(newResults)
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
                newSearch = {newSearch}

            />
            <Map datalist={datalist}/>
        </>
        
    )
}
export default Main;