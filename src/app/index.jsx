import React from 'react';
import AvailabilityWidget from '../features/availability-widget/AvailabilityWidget';
import Hero from '../features/hero/Hero';
import './App.scss';
import profile from '../common/images/profile-picture.png';
import Info from '../features/info/Info';

function App() {
  return (
    <div className="App">
      <Hero />
      <AvailabilityWidget
        profile={profile}
        name="Sarah"
        link="#"
        neighborhood="North Sydney"
        days={['Wednesday', 'Thursday', 'Friday']}
        workingHours={{ start: '7:30', end: '5:30' }}
      />
      <Info />
    </div>
  );
}

export default App;
