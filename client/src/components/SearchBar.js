import React from 'react';


const SearchBar = props => {
    const {search, changeHandler, submitHandler} = props;
    const {latitude, longitude} = search;

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="latitude">Latitude: </label>
            <input type="text" name="latitude" onChange={changeHandler} value={latitude}/>
            <label htmlFor="longitude">Longitude: </label>
            <input type="text" name="longitude" onChange={changeHandler} value={longitude}/>
            <label htmlFor="radius">Longitude: </label>
            {/*<input type="text" name="radius" onChange={changeHandler} value={radius}/>*/}
            {/*add radius input*/}
            <input type="submit" value="Search"/>
        </form>
    )
}
export default SearchBar;