import React from 'react';
import { Col } from 'react-bootstrap';

const PastMeetupCard = (props) => {
    return (
        <Col>
        <div className="card">
        <div className="card-body text-left">
            <h6 className="card-title">{props.date}</h6>
            <hr/>
            <p>{props.event_desc}</p>
            <p><b>{props.attendees}</b> went</p>
            <a href="/" class="btn btn-primary">View</a>
        </div>
        </div>
        </Col>
    );
}

export default PastMeetupCard;