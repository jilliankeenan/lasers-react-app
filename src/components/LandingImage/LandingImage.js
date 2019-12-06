import React, { useState } from 'react';
import Image from '../../assests/images/casinoimage.jfif'
import './landingImage.scss';

function LandingImage() {
    // Let's keep this here for example of hooks. 
    const [state, setState] = useState('')

    return (
        <div className="landing-image-container">
            <img src={Image}></img>
        </div>
    )
}

export default LandingImage;