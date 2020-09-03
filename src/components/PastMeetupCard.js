import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const PastMeetupCard = ({data}) => {
    return (
        <div className="row">
            {
                data.map((item) => (
                <div className="col-md-4 grid-wrapper" key={item.id}>
                    <div className="card bg-light">
                    <div className="card-body text-left">
                        <h6 className="card-title">{item.date}</h6>
                        <hr/>
                        <p>{item.event}</p>
                        <p><b>{item.attendees}</b> went</p>
                        <Button text="View"/>
                    </div>
                    </div>
                </div>
                ))
            }
        </div>
    );
}

PastMeetupCard.propTypes = {
    date: PropTypes.string,
    event_desc: PropTypes.string,
    attendees: PropTypes.number
}

export default PastMeetupCard;