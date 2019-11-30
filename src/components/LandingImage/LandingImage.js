import React, { useState } from 'react';
import Image from '../../assests/images/background-image.jpg'
import './landingImage.scss';

function LandingImage() {
    // Let's keep this here for example of hooks. 
    const [state, setState] = useState('')

    return (
        <div className="landing-image-container">
            <img src={Image}></img>
            <div className="text-block">
                <h1>She believed she could so she did</h1>
            </div>
        </div>
    )
}

export default LandingImage;