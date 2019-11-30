import React, { useState } from 'react';
import './navbar.scss';
function NavBar() {
    // Let's keep this here for example of hooks. 
    const [state, setState] = useState('')

    return (
        <div className="navbar-container">
            <div className="navbar-link-container">
                <a className="navbar-link" href="https://google.com">Home</a>
            </div>
            <div className="navbar-link-container">
                <a className="navbar-link" href="https://google.com"> Contact</a>
            </div>
            <div className="navbar-link-container">
                <a className="navbar-link" href="https://google.com">Products</a>
            </div>
        </div>
    )

}

export default NavBar;