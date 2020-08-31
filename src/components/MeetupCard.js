import React from 'react';

import Image from './Image';
import Button from './Button';

const MeetupCard = () => {
    return (
        <div className="card flex-row flex-wrap text-left bg-light mb-4">
            <Image/>
            <div className="card-block px-2">
                <h4 className="card-title mt-2">Hactiv8 Meeting</h4>
                <p className="card-text">Location : Jakarta, Indonesia</p>
                <p className="card-text">Members : 1,078</p>
                <p className="card-text">Organizers : Adhy Wiranata</p>
                <Button text="Join Us"/>
            </div>
        </div>        
    );
}

export default MeetupCard;