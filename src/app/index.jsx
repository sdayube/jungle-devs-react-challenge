import React from 'react';
import { Hero, AvailabilityWidget, Info, Footer } from '../features';
import profile from '../common/images/profile-picture.png';
import './App.scss';

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
      <Footer />
    </div>
  );
}

export default App;
