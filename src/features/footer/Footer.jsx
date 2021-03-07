import React from 'react';
import { calendar, logo, facebook, twitter, instagram } from '../../common/vectors';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <section id="footer-content">
        <h2>Become a nanny share host</h2>
        <p>Takes less than 5 minutes to get started</p>
        <button type="button">
          <div>
            <img src={calendar} alt="" />
            <span>Create Your Nanny Share</span>
            <span>Takes less than 5 minutes</span>
          </div>
        </button>
      </section>
      <section id="footer-nav">
        <img src={logo} alt="Hapu" />
        <nav aria-label="secondary">
          <ul>
            <li><a href="#">Create Your Nanny Share</a></li>
            <li><a href="#">Browse Shares</a></li>
            <li><a href="#">Our Story</a></li>
          </ul>
        </nav>
        <div>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
        </div>
      </section>
      <section id="footer-copyright">
        <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
      </section>
    </footer>
  );
}

export default Footer;
