import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { save, newsletterSubscribe } from '../infoSlice';
import './Section2.scss';

function Section2() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [validation, setValidation] = useState(true);

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.newsletter.loading);
  const sendAction = async (event) => {
    event.preventDefault();
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (name.length > 0 && emailRegex.test(email)) {
      setValidation(true);
      await dispatch(save({ name, email }));
      await dispatch(newsletterSubscribe());
    } else {
      setValidation(false);
    }
  };

  return (
    <section id="second-section">
      <div className="section-text">
        <h2>
          {loading === 'idle' && 'Are you a parent without a nanny and looking to share?'}
          {loading === 'pending' && 'Just wait a bit while our server magic works its shenanigans...'}
          {loading === 'fulfilled' && "We're happy to have you on board!"}
          {loading === 'rejected' && 'Something went wrong...'}
        </h2>
        <p>
          {loading === 'idle' && 'Leave us your name and email and we’ll update you as soon as a share becomes available in your area!'}
          {loading === 'fulfilled' && "From now on, we'll send you relevant updates on the availability of shares that may be relevant to you."}
          {loading === 'rejected' && "...but don't give up just yet! Be sure to again in a few minutes"}
        </p>
        <form id="newsletter-forms">
          <input placeholder="Your name" value={name} onChange={(event) => setName(event.target.value)} required />
          <input type="email" placeholder="Your email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          <button type="submit" onClick={sendAction}>Send</button>
        </form>
        {validation ? null : <span style={{ color: 'red', fontSize: '12px', lineHeight: 3 }}>Please fill in the input fields correctly</span>}
      </div>
    </section>
  );
}

export default Section2;
