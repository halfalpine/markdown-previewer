import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 30px 0px;
  font-size 1.2em;
`;

const Headline = styled.h1`
  text-align: center;
  margin-bottom: 0px;
`;

const Subhead = styled.p`
  text-align: center;
`;

const Title = () => (
  <Container>
    <Headline>Markdown Previewer</Headline>
    <Subhead>A React project for <a href="https://www.freecodecamp.org/challenges/build-a-markdown-previewer">Free Code Camp</a></Subhead>
  </Container>
)

export default Title;
