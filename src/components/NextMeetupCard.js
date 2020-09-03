import React from 'react';
import PropTypes from 'prop-types';

const NextMeetupCard = (props) => {
    return (
        <div className="card flex-row flex-wrap text-left bg-light mb-4 ml-4">
            <div className="card-block px-2">
            <b>{props.title}</b><br />
            <p className="date">{props.date}</p>
            <p>
                Hello, Javascript & Node.js Ninjas!<br></br>
                Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!<br></br>
                The meetup format will contain some sort of stories and technical talks.<br></br>
                If you have short announcement you'd like to share with the audience, you may do so during open mice announcements.
                <br></br>
                Remember to bring photo ID to get through building security.
                <br></br>.....<br></br>
                See you there!<br></br>
                Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers.
            </p>
            </div>
        </div>
    );
}

NextMeetupCard.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string
}

export default NextMeetupCard;