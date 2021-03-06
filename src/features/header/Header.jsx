import React from 'react';
import badge from '../../common/vectors/badge.svg';
import './Header.scss';

function Header() {
  return (
    <header>
      <div id="left-header-wrapper">
        <img src={badge} alt="logo" />
        <nav>
          <ul id="nav-list">
            <li><a href="#">Create Your Nanny Share</a></li>
            <li><a href="#">Browse Shares</a></li>
            <li><a href="#">Our Story</a></li>
          </ul>
        </nav>
      </div>
      <div id="right-header-wrapper">
        <button id="share-button" type="button">Become a Nanny Share Host</button>
        <button id="sign-in-button" type="button">Sign In</button>
      </div>
    </header>
  );
}

export default Header;