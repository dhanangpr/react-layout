import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';

import BootstrapNavbar from './components/BootstrapNavbar';
import MeetupCard from './components/MeetupCard';
import NextMeetupCard from './components/NextMeetupCard';
import MembersCard from './components/MembersCard';
import PastMeetupCard from './components/PastMeetupCard';

function App() {
  return (
    <div className="App">
      <BootstrapNavbar/>
      <br></br>
      <div className="container">
        <MeetupCard title="Hactiv8 Meeting" loc="Jakarta, Indonesia" members={1078} org="Adhy Wiranata"/>
        <h3 className="text-left">Next Meetup</h3>
        <NextMeetupCard title="Awesome Meetup and event" date="25 January 2019"/>
        
        <h3 className="text-left">About Meetup</h3>
        <p className="text-left ml-4"> 
          Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta area<br /><br />
          Twitter: @JakartaJS and we user the hashtag #jakartajs
        </p>
        <br />
        <div>
        
        <h3 className="text-left">Members</h3>
        <p className="text-right">See all</p><br />
        </div>
        <MembersCard name="Adhi Wiranata" count="4"/>
        <br></br>
        <div>
        
        <h3 className="text-left">Past Meetups</h3> 
        <p className="text-right">See all</p><br />
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
