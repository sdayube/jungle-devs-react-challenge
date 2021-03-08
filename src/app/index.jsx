import React from 'react';
import { Hero, AvailabilityWidget, Info, Footer } from '../features';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Hero />
      <AvailabilityWidget />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
