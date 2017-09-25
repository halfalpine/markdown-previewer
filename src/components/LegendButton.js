import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LegendButton = ({ handleLegendChange }) => {
  const LegendButton = styled.button`
    height: 36px;
    width: 100%;
    margin: 20px;
    background: rgba(192, 192, 192, 0.3);
    font-size: 24px;
    text-align: center;
    border: none;
    border-radius: 20px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
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
