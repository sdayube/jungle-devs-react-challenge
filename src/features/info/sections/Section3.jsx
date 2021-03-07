import React from 'react';
import sectionImage from '../../../common/images/image-section-3.png';

function Section3() {
  return (
    <section id="third-section" className="info-section dual-column-wrapper">
      <img src={sectionImage} alt="Nanny share map example" />
      <div className="section-text">
        <h2>
          Shared payments made simple
        </h2>
        <p>
          Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week
          in, week out and you might encounter more than a few snares. But not with Hapu. Simply
          set your rates and our automated payment system takes care of the rest. You need never
          talk money or who owes what.
        </p>
        <a href="#">Read how Bridget’s share (without Hapu) ended over $15</a>
      </div>
    </section>
  );
}

export default Section3;
