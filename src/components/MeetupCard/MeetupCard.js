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
                <h6>Location : Jakarta , Indonesia</h6>
                <h6>Members : 1078</h6>
                <h6>Organizer : Adhy Wiranata</h6>
                <Button text="Join Us!"></Button>
            </div>
        </div>
    );
}

export default MeetupCard;