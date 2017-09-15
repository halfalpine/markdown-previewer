import React from 'react';
import PropTypes from 'prop-types';

const Input = ({text, handleInputChange}) =>
  <div className="md-component">
    <h2>This is the Input.</h2>
    <form className="textarea-input">
      <textarea
        autoFocus={false}
        type="text"
        value={text}
        onChange={handleInputChange}
      >
      </textarea>
    </form>
  </div>

Input.propTypes = {
  text: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
}

export default Input;
