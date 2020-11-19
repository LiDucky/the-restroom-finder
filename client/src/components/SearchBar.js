import React from 'react';

const SearchBar = props => {
    const {search, changeHandler, submitHandler} = props;
    const {latitude, longitude, radius} = search;

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="latitude">Latitude: </label>
            <input type="text" name="latitude" onChange={changeHandler} value={latitude}/>
            <label htmlFor="longitude">Longitude: </label>
            <input type="text" name="longitude" onChange={changeHandler} value={longitude}/>
            <label htmlFor="radius">Radius: </label>
            <input type="text" name="radius" onChange={changeHandler} value={radius}/>
            <input type="submit" value="Search"/>
            <input type="checkbox"/>
            <label htmlFor="unisex">Gender Neutral</label>
            <br/>
            <input type="checkbox"/>
            <label htmlFor="changing_table">Changing Table</label>
            <br/>
            <input type="checkbox"/>
            <label htmlFor="accessible">ADA Accessible</label>
            <br/>
            <input type="submit" value="Search"/>
        </form>
    )
}
export default SearchBar;