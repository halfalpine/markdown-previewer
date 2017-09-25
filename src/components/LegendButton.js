import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LegendButton = ({ handleLegendChange }) => {
  const LegendButton = styled.div`
    font-size: 1.5em;
    text-align: center;
    background: rgba(192, 192, 192, 0.3);
    border: none;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    width: 100%;
    margin: 20px;
    &:hover {
      background: rgba(192, 192, 192, 0.5);
    }
    &:focus {
      outline: none;
    }
  `;

  return <LegendButton onClick={handleLegendChange}>Show Legend</LegendButton>;
};

LegendButton.propTypes = {
  handleLegendChange: PropTypes.func.isRequired
};

export default LegendButton;
