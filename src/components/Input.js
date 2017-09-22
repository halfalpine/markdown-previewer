import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TextColumn, TextDisplay } from './Styles';

const FormDisplay = TextDisplay.withComponent('form');

const TextArea = styled.textarea.attrs({
  type: 'text',
  autoFocus: false,
}) `
  height: 100%;
  width: 100%;
  font: inherit;
  font-family: monospace;
  border: none;
  outline: none;
  resize: none;
`;

const Input = ({ text, handleInputChange }) =>
  <TextColumn>
    <h2>This is the Input.</h2>
    <FormDisplay>
      <TextArea
        value={text}
        onChange={handleInputChange}
      >
      </TextArea>
    </FormDisplay>
  </TextColumn>

Input.propTypes = {
  text: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
}

export default Input;
