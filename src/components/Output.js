import React from 'react';
import PropTypes from 'prop-types';

const Output = ({text}) =>
  <div className="md-component">
    <h2>This is the Output.</h2>
    <div
      className="textarea-output"
      dangerouslySetInnerHTML={{__html: marked(text, {breaks: true})}}
    />
  </div>

Output.propTypes = {
  text: PropTypes.string.isRequired
}

export default Output;
