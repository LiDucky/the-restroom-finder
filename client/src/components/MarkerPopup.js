import React from 'react'
import {Popup} from 'react-leaflet';
import {Link} from '@reach/router'

const MarkerPopup = props => {
    const {route, name, changing_table, accessible, unisex, street, city, state, loadDirections} = props;

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