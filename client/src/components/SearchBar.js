import React from 'react';


const SearchBar = props => {
    const {search, changeHandler, submitHandler} = props;
    console.log(search);
    const {latitude, longitude} = search;

    return (
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="latitude">Latitude: </label>
                <input type="text" name="latitude" onChange={changeHandler} value={latitude}/>
                <br/>
                <label htmlFor="longitude">Longitude: </label>
                <input type="text" name="longitude" onChange={changeHandler} value={longitude}/>
                <br/>
                <input type="submit" value="Search"/>
            </form>
            <form>
                <input type="checkbox"/>
                <label htmlFor="unisex">Gender Neutral</label>
                <br/>
                <input type="checkbox"/>
                <label htmlFor="changing_table">Changing Table</label>
                <br/>
                <input type="checkbox"/>
                <label htmlFor="accessible">ADA Accessible</label>
                <br/>
            </form>
        </>
    )
}
export default SearchBar;