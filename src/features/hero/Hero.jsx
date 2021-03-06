import React from 'react';
import Header from '../header/Header';
import play from '../../common/vectors/play-button.svg';
import heroImage from '../../common/images/image-header.png';
import './Hero.scss';

function Hero() {
  return (
    <section id="hero-section">
      <Header />
      <div id="hero-wrapper">
        <article>
          <h1>Easily create or join a local nanny share with Hapu</h1>
          <p>
            Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new
            flexible, affordable solutions in childcare.
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
