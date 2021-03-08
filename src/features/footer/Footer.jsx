import React from 'react';
import Divider from '../../common/components/Divider';
import { calendar, logo, facebook, twitter, instagram } from '../../common/vectors';
import './Footer.scss';

function Footer() {
  return (
    <footer>
      <section id="footer-content">
        <h2>Become a nanny share host</h2>
        <p>Takes less than 5 minutes to get started</p>
        <button type="button">
          <img src={calendar} alt="" />
          <div>
            <span>Create Your Nanny Share</span>
            <span>Takes less than 5 minutes</span>
          </div>
        </button>
        <a href="#">Or browse local nanny-shares</a>
      </section>
      <section id="footer-nav">
        <div id="logo-wrapper">
          <img src={logo} alt="Hapu" className="wrapper" />
        </div>
        <nav aria-label="secondary">
          <ul>
            <li><a href="#">Share Your Nanny</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Terms & Privacy</a></li>
          </ul>
        </nav>
        <div id="social">
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
      <Divider initialValue="hide" />
      <section id="footer-copyright">
        <p>Copyright © 2017 Hapu PTY Limited All rights reserved</p>
      </section>
    </footer>
  );
}

export default Footer;
