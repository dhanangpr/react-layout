import React from 'react';

import Avatar from '../Avatar/Avatar';
import Button from '../Button/Button';

import './MeetupCard.css';

const MeetupCard = () => {
    return (
        <div className="MeetupCard">
            <Avatar/>
            <div className="MeetupDesc">
                <h1>Hacktiv8 Meetup</h1>
                <p>Location : Jakarta , Indonesia</p>
                <p>Members : 1078</p>
                <p>Organizer : Adhy Wiranata</p>
                <Button text="Join Us!"></Button>
            </div>
            
        </div>
    );
}

export default MeetupCard;