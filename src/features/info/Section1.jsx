import React from 'react';
import sectionImage from '../../common/images/image-section-1.png';

function Section1() {
  return (
    <section id="first-section" className="info-section dual-column-wrapper">
      <div className="section-text">
        <h2>
          Share your home,
          <br />
          nanny and costs
        </h2>
        <p>
          You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half
          be, well, fantastic?! If only it was easy to connect with other parents to share your
          costs? Well now it is, with Hapu. Hapu means tribe and it’s our foundational 3 tribal
          principles that empowers you to create and manage your own tribe. A tribe that
          together has the power to create new affordable solutions in childcare that work for
          you and your community.
        </p>
        <a href="#">Ready to get started?</a>
      </div>
      <img src={sectionImage} alt="Nanny share map example" />
    </section>
  );
}

export default Section1;
