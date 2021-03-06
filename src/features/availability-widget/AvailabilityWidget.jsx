import React from 'react';
import PropTypes from 'prop-types';
import './AvailabilityWidget.scss';

function AvailabilityWidget(props) {
  const {
    profile, name, link, neighborhood, days, workingHours,
  } = props;

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

AvailabilityWidget.propTypes = {
  days: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  neighborhood: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
  workingHours: PropTypes.shape({
    end: PropTypes.string,
    start: PropTypes.string,
  }).isRequired,
};

export default AvailabilityWidget;
