import React from 'react';


const SearchBar = props => {
    const {search, changeHandler, submitHandler} = props;
    console.log(search);
    const {latitude, longitude} = search;

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="latitude">Latitude: </label>
            <input type="text" name="latitude" onChange={changeHandler} value={latitude}/>
            <label htmlFor="longitude">Longitude: </label>
            <input type="text" name="longitude" onChange={changeHandler} value={longitude}/>
            <input type="submit" value="Search"/>
        </form>
    )
}
export default SearchBar;