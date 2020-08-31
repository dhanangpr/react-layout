import React from 'react';
import { Col } from 'react-bootstrap';

import Button from '../Button/Button';

import './PastMeetupCard.css';

const PastMeetupCard = (props) => {
    return (
        <Col>
        <div className="PastMeetupCard">
            <div className="PastMeetupDesc">
                <b>{props.date}</b>
                <hr></hr>
                <p>{props.event_desc}</p>
                <p className="went">{props.attendees} &nbsp;went</p>
                <Button text="View" ></Button>
            </div>
        </div>
        </Col>
    );
}

export default PastMeetupCard;