import React, { useState } from 'react';
import './navbar.css';
function NavBar() {
    const [state, setState] = useState('')

    return (
        <div className="navbar-container">
            <div>
                <a href="https://google.com">Home</a>
            </div>
            <div>
                <a href="https://google.com"> Contact</a>
            </div>
            <div>
                <a href="https://google.com">Products</a>
            </div>
        </div>
    )

}

export default NavBar;