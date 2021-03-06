import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import MeetingImages from '../assets/image.jpg';
import Button from './Button';

const MeetupCard = (props) => {
    return (
        <div className="card flex-row flex-wrap text-left bg-light mb-4">
            <Image src={MeetingImages} alt={MeetingImages}/>
            <div className="card-block px-2">
                <h4 className="card-title mt-2">{props.title}</h4>
                <p className="card-text" id="location">Location : {props.loc}</p>
                <p className="card-text" id="members">Members : {props.members}</p>
                <p className="card-text" id="organizer">Organizer : {props.org}</p>
                <Button text="Join Us"/>
            </div>
        </div>        
    );
}

MeetupCard.propTypes = {
    title: PropTypes.string,
    loc: PropTypes.string,
    members: PropTypes.number,
    org: PropTypes.string
}

export default MeetupCard;