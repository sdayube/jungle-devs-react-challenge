import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import play from '../../common/vectors/play-button.svg';
import heroImage from '../../common/images/image-header.png';
import './Hero.scss';

function Hero() {
  const [ABTestResult, setABTest] = useState(parseInt(localStorage.getItem('ABTest'), 10));

  useEffect(() => {
    if (Number.isNaN(ABTestResult)) {
      const ABValue = Math.floor(Math.random() * 2);
      localStorage.setItem('ABTest', ABValue);
      setABTest(parseInt(localStorage.getItem('ABTest'), 10));
    }
  });

  return (
    <section id="hero-section">
      <Header />
      <div id="hero-wrapper">
        <article>
          <h1>
            { ABTestResult
              ? 'Easily create or join a local nanny share with Hapu'
              : 'Create the childcare you need at a price you can afford'}
          </h1>
          <p>
            { ABTestResult
              ? 'Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.'
              : 'Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.'}
          </p>
          <div>
            <img src={play} alt="Play button" />
            <a href="#">See hapu in action (27 seconds)</a>
          </div>
        </article>
        <img id="hero-image" src={heroImage} alt="Manage your nanny share" />
      </div>
    </section>
  );
}

export default Hero;
