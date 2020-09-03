import React from 'react';
import './App.css';

import BootstrapNavbar from './components/BootstrapNavbar';
import MeetupCard from './components/MeetupCard';
import NextMeetupCard from './components/NextMeetupCard';
import MembersCard from './components/MembersCard';
import PastMeetupCard from './components/PastMeetupCard';

function App() {
  const dataPastMeetUp = [
    {
      id: 0,
      date: '27 November 2017',
      event: '#39 JakartaJS April Meetup with Kumparan',
      attendees: 139,
    },
    {
      id: 1,
      date: '27 November 2017',
      event: '#38 JakartaJS April Meetup with Blibli',
      attendees: 113,
    },
    {
      id: 2,
      date: '27 November 2017',
      event: '#37 JakartaJS April Meetup with Hacktiv8',
      attendees: 110,
    }
  ]

  return (
    <div className="App">
      <BootstrapNavbar/>
      <div className="ml-3 mr-3">
        <div className="mb-4">
        <MeetupCard title="Hactiv8 Meeting" loc="Jakarta, Indonesia" members={1078} org="Adhy Wiranata"/>
        </div>
        
        <div className="mb-4">
        <h3 className="text-left">Next Meetup</h3>
        <NextMeetupCard title="Awesome Meetup and event" date="25 January 2019"/>
        </div>

        <div className="mb-4">
        <h3 className="text-left">About Meetup</h3>
        <p className="text-left ml-4"> 
          Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta area<br /><br />
          Twitter: @JakartaJS and we user the hashtag #jakartajs
        </p>
        </div>

        <div className="mb-4">
          <h3 className="text-left">Members</h3>
          <p className="text-right">See all</p>
          <MembersCard name="Adhi Wiranata" count={4}/>
        </div>
        
        <div className="mb-4">
        <h3 className="text-left">Past Meetups</h3>
        <p className="text-right">See all</p>
          <PastMeetupCard data={dataPastMeetUp}/>
        </div>

        <hr />
        <p className="copyright text-center mb-4">Copyright &copy; Hacktiv8 2020 </p>
      </div>
    </div>
  )
}

export default App;
