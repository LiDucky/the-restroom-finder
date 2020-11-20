import React from 'react';


const SearchBar = props => {
    const {search, changeHandler, submitHandler} = props;
    const {latitude, longitude, radius, unisex, changing_table, accessible} = search;

    const checked = true;
    return (
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="latitude">Latitude: </label>
                <input type="text" name="latitude" onChange={changeHandler} value={latitude}/>
                <br/>
                <label htmlFor="longitude">Longitude: </label>
                <input type="text" name="longitude" onChange={changeHandler} value={longitude}/>
                <br/>
                <label htmlFor="radius">Radius: </label>
                <input type="integer" name="radius" onChange={changeHandler} value={radius}/>
                <br/>
                <input type="checkbox" id="unisex" name="unisex" value={unisex} onChange={changeHandler} defaultChecked/>
                <label htmlFor="unisex">Gender Neutral</label>
                <br/>
                <input type="checkbox" id="changing_table" name="changing_table" value={changing_table} onChange={changeHandler} defaultChecked/>
                <label htmlFor="changing_table">Changing Table</label>
                <br/>
                <input type="checkbox" id="accessible" name="accessible" value={accessible} onChange={changeHandler} defaultChecked/>
                <label htmlFor="accessible">ADA Accessible</label>
                <br/>
                <input type="submit" value="Search"/>
            </form>
        </>
    )
}
export default SearchBar;