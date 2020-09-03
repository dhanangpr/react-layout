import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

import Button from './Button';

const PastMeetupCard = (props) => {
    return (
        <Col>
        <div className="card bg-light">
        <div className="card-body text-left">
            <h6 className="card-title">{props.date}</h6>
            <hr/>
            <p>{props.event_desc}</p>
            <p><b>{props.attendees}</b> went</p>
            <Button text="View"/>
        </div>
        </div>
        </Col>
    );
}

PastMeetupCard.propTypes = {
    date: PropTypes.string,
    event_desc: PropTypes.string,
    attendees: PropTypes.number
}

export default PastMeetupCard;