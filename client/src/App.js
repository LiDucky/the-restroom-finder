import React from 'react';
import './App.css';
import {Link, Router} from '@reach/router';
import Map from './components/Map';

function App() {

    return (
        <div className="center">
            <div className="App">
                <div className="topMenu">
                    <div className="menuButton">
                        
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor"></svg>
                    </div>
                    <input type="text" name="search" placeholder="Search..."/>
                </div>
                <Map/>
            </div>
        </div>
    );
}

export default App;