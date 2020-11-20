import React from 'react';

const SearchBar = props => {
    const {search, changeHandler, personLocation, submitHandler} = props;
    const {radius, unisex, changing_table, accessible} = search;
    return (
        <>
            <button id="hider" className="btn btn-info" onClick={() => {
                    document.getElementById("searchBar").style.display=="block"?
                        document.getElementById("searchBar").style.display="none":
                        document.getElementById("searchBar").style.display="block"
                    document.getElementById("hider").innerHTML=="Show Search"?
                        document.getElementById("hider").innerHTML="Hide Search":
                        document.getElementById("hider").innerHTML="Show Search"
            }}>Show Search</button>
            <form id="searchBar" onSubmit={submitHandler}>
                <label htmlFor="lat">Latitude: </label>
                <input className="form-control" type="text" name="lat" onChange={changeHandler} value={personLocation.lat}/>
                <label htmlFor="lng">Longitude: </label>
                <input className="form-control" type="text" name="lng" onChange={changeHandler} value={personLocation.lng}/>
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
                <input className="btn btn-primary my-2" type="submit" value="Search"/>
            </form>
        </>
    )
}
export default SearchBar;