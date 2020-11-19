import React from 'react'
import {Popup} from 'react-leaflet';

const MarkerPopup = props => {
    const {name, changing_table, accessible, unisex, street, city, state} = props;

    return (
        <Popup>
            <div className='popup-text'>
                <h4>{name}</h4>
                { changing_table ? <p>Changing Table: Yes</p> : <p>Changing Table: No</p> }
                { accessible ? <p>ADA Accessible: Yes</p> : <p>ADA Accessible: No</p> }
                { unisex ? <p>Gender Neutral: Yes</p> : <p>Gender Neutral: No</p> }
                <p>{street}</p>
                <p>{city}, {state}</p>
                {/* <p onClick={loadDirections}>See Directions</p> */}
            </div>
        </Popup>
    )
};

export default MarkerPopup;