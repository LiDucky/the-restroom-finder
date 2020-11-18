import React from 'react';


const SearchBar = props => {
    const {search, changeHandler, submitHandler} = props;
    console.log('this is', search.latitude)
    // const {latitude, longitude} = search;

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="latitude">Latitude: </label>
            <input type="text" name="latitude" onChange={changeHandler} value={search.latitude}/>
            <label htmlFor="longitude">Longitude: </label>
            <input type="text" name="longitude" onChange={changeHandler} value={search.longitude}/>
            <input type="submit" value="Search"/>
        </form>
    )
}
export default SearchBar;