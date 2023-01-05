import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" style={{height: '100px', width: '100px', backgroundColor: 'darkgreen' }}>
                    <div className="Tilt-inner pa3"><img alt="a brain" src={brain}/></div>
            </Tilt>
        </div>
    )
}

export default Logo;