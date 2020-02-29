import React from 'react';
import Tilt from 'react-tilt';
import comparator from './icons8-comparator-64.png';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 100, width: 100 }} >
                <div className="Tilt-inner pa3">
                   <img style={{paddingTop: '5px'}} alt='logo' src={comparator}/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;