import React from 'react';
import sectionImage from '../../../common/vectors/nanny-share.svg';
import './Section5.scss';

function Section5() {
  return (
    <section id="fifth-section">
      <img src={sectionImage} alt="Billing history demonstration" />
      <div className="section-text">
        <h2>Coming soon: Nanny Share Daily Diary!</h2>
        <p>
          With the Hapu daily diary your nanny will be able to update you and your sharers with
          photos and commentary of the day. You and sharers will receive notifications and
          you’ll be able to login to view the daily adventures fo your little ones. We can’t wait!
        </p>
      </div>
    </section>
  );
}

export default Section5;
