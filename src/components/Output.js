import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

import { TextColumn, TextDisplay } from './Styles';

const Output = ({ text }) =>
  <TextColumn>
    <h2>This is the Output.</h2>
    <TextDisplay
      dangerouslySetInnerHTML={{
        __html: marked(text, { breaks: true })
      }}
    />
  </TextColumn>

Output.propTypes = {
  text: PropTypes.string.isRequired
}

export default Output;
