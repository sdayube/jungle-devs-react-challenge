import React from 'react';
import { useSelector } from 'react-redux';
import './AvailabilityWidget.scss';

export default function AvailabilityWidget() {
  const availableNannies = useSelector((state) => state.availableNannies);
  const nannyRandomizer = availableNannies[Math.floor(Math.random() * availableNannies.length)];
  const {
    profile, name, link, neighborhood, days, workingHours,
  } = nannyRandomizer;

  return (
    <article id="widget-section">
      <img src={profile} alt={`${name} Profile`} />
      <div id="widget-text">
        <h2><a href={link}>{`${name}’s day care available now in ${neighborhood}`}</a></h2>
        <p>
          {days.join(', ')}
          {' - '}
          {`${workingHours.start} - ${workingHours.end}`}
        </p>
      </div>
    </article>
  );
}
