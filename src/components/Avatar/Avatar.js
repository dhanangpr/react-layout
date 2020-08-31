import React from 'react'

import avatar from '../../assets/avatar.jpg';

import './Avatar.css';

const Avatar = () => {
    return (
        <div className="m-4">
            <img src={avatar}
                alt="Avatar"
                className="avatar" 
            />
        </div>
    );
}

export default Avatar;
