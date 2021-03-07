import React from 'react';
import sectionImage from '../../../common/images/image-section-4.png';
import './Section4.scss';

function Section4() {
  return (
    <section id="fourth-section">
      <div className="section-text">
        <h2>A framework built for the long term</h2>
        <p>
          Childcare is for the long term. And you need a framework you can count on that gives
          your share long term viability and success. That’s why we’ve defined Hapu around our
          three tribal principles; clearly defined process, transparency over money and equality
          of participation.
        </p>
        <a href="#">Read how Hapu’s tribal background defines our app </a>
      </div>
      <img src={sectionImage} alt="Billing history demonstration" />
    </section>
  );
}

export default Section4;
