import React from 'react'

import image from '../assets/avatar.jpg';

const Image = () => {
    return (
        <div className="card-header">
            <img src={image}
                alt="Meeting"
                className="image"
                width="200px" 
                height="200px" 
            />
        </div>
    );
}

export default Image;
