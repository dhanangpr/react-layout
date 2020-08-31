import React from 'react';

import Avatar from '../Avatar/Avatar';

import './MembersCard.css';

const MembersCard = () => {
    return (
        <div className="MembersCard">
            <Avatar/>
            <div className="MembersDesc">
                <h2>Organizers</h2>
                <p>Adhi Wiranata    4 others</p>
            </div>
            
        </div>
    );
}

export default MembersCard;