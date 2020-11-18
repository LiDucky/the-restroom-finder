import React from 'react';
import './App.css';
//import {Link, Router} from '@reach/router';
import Main from './views/Main';

function App() {

    return (
        <div className="center">
            <div className="App">
                <div className="topMenu">
                    <div className="menuButton">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-caret-down-fill" fill="currentColor"></svg>
                    </div>
                </div>
            </div>
            <Main/>
        </div>
    );
}

export default App;