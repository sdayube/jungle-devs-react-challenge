import React from 'react';

function Section2() {
  return (
    <section id="second-section" className="info-section column-wrapper">
      <div className="section-text">
        <h2>Are you a parent without a nanny and looking to share?</h2>
        <p>
          Leave us your name and email and we’ll update you as soon as a share becomes
          available in your area!
        </p>
        <forms id="newsletter-forms">
          <input placeholder="Your name" />
          <input placeholder="Your email" />
          <button type="submit">Send</button>
        </forms>
      </div>
    </section>
  );
}

export default Section2;
