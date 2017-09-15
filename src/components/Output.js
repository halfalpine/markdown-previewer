import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

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
