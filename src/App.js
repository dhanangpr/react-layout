import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import BootstrapNavbar from './components/bootstrapNavbar';
import MeetupCard from './components/MeetupCard/MeetupCard';
import NextMeetupCard from './components/NextMeetupCard/NextMeetupCard';
import MembersCard from './components/MembersCard/MembersCard';
import PastMeetupCard from './components/PastMeetupCard/PastMeetupCard';

function App() {
  return (
    <div className="App">
      <BootstrapNavbar/>
      <div className="container">
        <MeetupCard />
        <br></br>
        <h1>Next Meetup</h1>
        <NextMeetupCard />
        <h1>About Meetup</h1>
        <p> 
          Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta area<br /><br />
          Twitter: @JakartaJS and we user the hashtag #jakartajs
        </p>
        <br />
        <div>
          <h1>Members</h1> 
          <p className="SeeAll">See all</p><br />
        </div>
        <MembersCard />
        <div>
          <h1>Past Meetups</h1> 
          <p className="SeeAll">See all</p><br />
        </div>
        <div className="past-meetups">
          <Container>
            <Row>
              <PastMeetupCard date="27 November 2017" event_desc="#39 JakartaJS April Meetup with Kumparan" attendees="139"/>
              <PastMeetupCard date="27 November 2017" event_desc="#38 JakartaJS April Meetup with Blibli" attendees="113"/>
              <PastMeetupCard date="27 November 2017" event_desc="#37 JakartaJS April Meetup with Hacktiv8" attendees="110"/>
            </Row>
          </Container>
        </div>
        <br />
        <hr></hr>
        <br />
        <center><p className="copyright">Copyright &copy; Hacktiv8 2020 </p></center>
        <br />  
      </div>
    </div>
  );
}

export default App;
