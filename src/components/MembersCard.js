import React from 'react';

import Avatar from './Avatar/Avatar';

const MembersCard = (props) => {
    return (
        <div className="card flex-row flex-wrap text-left bg-light mb-4">
            <Avatar/>
            <div className="card-block pt-4">
                <h4>Organizers</h4>
                <p>{props.name} <b>{props.count}</b> others</p>    
            </div>
        </div> 
    );
}

export default MembersCard;