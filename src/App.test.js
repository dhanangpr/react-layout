import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from "enzyme-to-json";

import App from './App';
import MeetupCard from './components/MeetupCard';

it('Pages App running without crash', () => {
  shallow(<App />);
});

// it('Render Title Join Us', () => {
//   const wrapper = mount(<App />);
//   const header = <h1>Hacktiv8 Meetup</h1>;
//   expect(wrapper.contains(header)).toEqual(true);
// })

describe('content description test', () => {
  it('Location', () => {
    const wrapper = shallow(<MeetupCard />);
    const location = wrapper.find("#location").text();
    expect(location).toEqual("Location : ");
  });

  it('Members', () => {
    const wrapper = shallow(<MeetupCard />);
    const members = wrapper.find("#members").text();
    expect(members).toEqual("Members : ");
  });

  it('Organizer', () => {
    const wrapper = shallow(<MeetupCard />);
    const organizer = wrapper.find("#organizer").text();
    expect(organizer).toEqual("Organizer : ");
  });
})