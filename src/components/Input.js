import React from "react";
import PropTypes from "prop-types";

const Input = ({ text, handleInputChange }) => {
  const styles = {
    width: "50%",
    padding: "10px"
  };
  return (
    <div className="md-component" style={styles}>
      <h2>This is the Input.</h2>
      <form className="textarea-input">
        <textarea
          autoFocus={false}
          type="text"
          value={text}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
};

Input.propTypes = {
  text: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default Input;
