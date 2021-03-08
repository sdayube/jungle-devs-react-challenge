import PropTypes from 'prop-types';
import React from 'react';
import './Divider.scss';

export default function Divider(props) {
  const { initialValue: initial } = props;
  return (
    <div className={`section-divider${initial === 'hide' ? ' hidden-start' : ''}`} />
  );
}

Divider.propTypes = {
  initialValue: PropTypes.string,
};

Divider.defaultProps = {
  initialValue: 'show',
};
