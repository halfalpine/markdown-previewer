import React from "react";
import PropTypes from "prop-types";

const LegendButton = ({ handleLegendChange }) => {
  const styles = {
    fontSize: "1.5em",
    background: "rgba(192, 192, 192, 0.3)",
    border: "none",
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.2)",
    borderRadius: "20px",
    width: "100%",
    margin: "20px"
  };
  return (
    <button
      style={styles}
      className="legend-button"
      onClick={handleLegendChange}
    >
      Show Legend
    </button>
  );
};

LegendButton.propTypes = {
  handleLegendChange: PropTypes.func.isRequired
};

export default LegendButton;
