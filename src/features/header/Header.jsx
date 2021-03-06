import React from 'react';
import badge from '../../common/vectors/badge.svg';

function Header() {
  return (
    <header>
      <div>
        <img src={badge} alt="logo" />
        <nav>
          <ul>
            <li><a href="#">Create Your Nanny Share</a></li>
            <li><a href="#">Browse Shares</a></li>
            <li><a href="#">Our Story</a></li>
          </ul>
        </nav>
      </div>
      <div>
        <button type="button">Become a Nanny Share Host</button>
        <button type="button">Sign In</button>
      </div>
    </header>
  );
}

export default Header;
