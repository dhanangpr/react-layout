import React from 'react';

import Avatar from './Avatar/Avatar';

const MembersCard = () => {
    return (
        <div className="card flex-row flex-wrap text-left mb-4">
            <Avatar/>
            <div className="card-block pt-4">
                <h4>Organizers</h4>
                <p>Adhi Wiranata 4 others</p>    
            </div>
        </div> 
    );
}

export default MembersCard;