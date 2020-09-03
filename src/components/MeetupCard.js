import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import Button from './Button';

const MeetupCard = (props) => {
    return (
        <div className="card flex-row flex-wrap text-left bg-light mb-4">
            <Image/>
            <div className="card-block px-2">
                <h4 className="card-title mt-2">{props.title}</h4>
                <p className="card-text">Location : {props.loc}</p>
                <p className="card-text">Members : {props.members}</p>
                <p className="card-text">Organizers : {props.org}</p>
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