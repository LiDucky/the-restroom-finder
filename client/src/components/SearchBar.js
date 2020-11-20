import React from 'react';

const SearchBar = props => {
    const {search, changeHandler, submitHandler} = props;
    const {latitude, longitude, radius, unisex, changing_table, accessible} = search;

    return (
        <>
            <button id="hider" className="btn btn-secondary" onClick={() => {
                    document.getElementById("searchBar").style.display=="block"?
                        document.getElementById("searchBar").style.display="none":
                        document.getElementById("searchBar").style.display="block"
                    document.getElementById("hider").innerHTML=="Show Search"?
                        document.getElementById("hider").innerHTML="Hide Search":
                        document.getElementById("hider").innerHTML="Show Search"
            }}>Show Search</button>
            <form id="searchBar" onSubmit={submitHandler}>
                <label htmlFor="latitude">Latitude: </label>
                <input className="form-control" type="text" name="latitude" onChange={changeHandler} value={latitude}/>
                <label htmlFor="longitude">Longitude: </label>
                <input className="form-control" type="text" name="longitude" onChange={changeHandler} value={longitude}/>
                <label htmlFor="radius">Radius: </label>
                <input className="form-control" type="text" name="radius" onChange={changeHandler} value={radius}/>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="unisex" name="unisex" value={unisex} onChange={changeHandler} defaultChecked/>
                    <label className="form-check-label" htmlFor="unisex">Gender Neutral</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="changing_table" name="changing_table" value={changing_table} onChange={changeHandler} defaultChecked/>
                    <label className="form-check-label" htmlFor="changing_table">Changing Table</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="accessible" name="accessible" value={accessible} onChange={changeHandler} defaultChecked/>
                    <label className="form-check-label" htmlFor="accessible">ADA Accessible</label>
                </div>
                <input className="btn btn-primary" type="submit" value="Search"/>
            </form>
        </>
    )
}
export default SearchBar;