import React from 'react';
import PropTypes from 'prop-types';

const LegendButton = ({handleLegendChange}) =>
  <button className="legend-button" onClick={handleLegendChange}>
    Show Legend
  </button>

LegendButton.propTypes = {
  handleLegendChange: PropTypes.func.isRequired
}

export default LegendButton;
