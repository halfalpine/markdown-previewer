import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Legend = ({ handleLegendChange }) => {
  const Main = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background: rgba(192, 192, 192, 0.3);
    padding: 0px 10px;
    margin: 20px;
    border-radius: 10px;
  `;

  const LegendTitle = styled.div`
    width: 100%;
    text-align: center;
  `;

  const CloseLegend = styled.div`
    position: absolute;
    display: block;
    top: 5px;
    right: 5px;
    margin: 5px;
    height: 1.3em;
    width: 1.3em;
    line-height: 1.3em;
    text-align: center;
    vertical-align: middle;
    border-radius: 50%;
    font-size: 1.2em;
    user-select: none;
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      cursor: default;
    }
  `;

  const Define = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 10px 20px;
    background: rgba(192, 192, 192, 0.3);
    border-radius: 10px;
  `;

  const ExampleText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 75px;
    margin: 0px 5px;
  `;
  const ExampleInput = styled.div`
    font-family: monospace;
    .example-text {
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
  `;
  const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  `;
  const Column = styled.div`flex: 1;`;
  const Cite = styled.div`
    margin: auto;
    padding: 5px 40px;
    background: rgba(0, 0, 0, 0.3);
    text-align: right;
    border-radius: 10px;
  `;
  const Bold = styled.span`font-weight: bold;`;
  const Italic = styled.span`font-style: italic;`;
  const BlockQuote = styled.span`
    border-left: 2px solid white;
    padding: 0px 5px;
  `;
  const Hr = styled.hr`width: 100%;`;

  return (
    <Main>
      <LegendTitle>
        <CloseLegend onClick={handleLegendChange}>&#10006;</CloseLegend>
        <h2 className="legend-title">Legend</h2>
      </LegendTitle>
      <Define>
        <Column>
          <h3>What is Markdown?</h3>
          <blockquote>
            Markdown is a lightweight markup language with plain text formatting
            syntax. It is designed so that it can be converted to HTML and many
            other formats using a tool by the same name.
          </blockquote>
        </Column>
        <Column>
          <h3>Why should I be excited?</h3>
          <blockquote>
            The overriding design goal for Markdown’s formatting syntax is to
            make it as readable as possible. The idea is that a
            Markdown-formatted document should be publishable as-is, as plain
            text, without looking like it’s been marked up with tags or
            formatting instructions.
          </blockquote>
        </Column>
        <Row>
          <Cite>
            - John Gruber, author of {" "}
            <a href="https://daringfireball.net/projects/markdown/">
              'Markdown'
            </a>
            {", at "}
            <a href="https://daringfireball.net/">Daring Fireball</a>
          </Cite>
        </Row>
      </Define>
      <Row>
        <Column>
          <ExampleInput>
            <ExampleText>
              <p>This is a heading 1</p>
              <p>===================</p>
            </ExampleText>
            <ExampleText>
              <p>This is a heading 2</p>
              <p>-------------------</p>
            </ExampleText>
            <ExampleText>
              <p>[This is a hyperlink](http://www.example.com)</p>
            </ExampleText>
            <ExampleText>
              <p>Italics work like *this* or like _this_.</p>
            </ExampleText>
            <ExampleText>
              <p>Bold text works like **this** or like __this__</p>
            </ExampleText>
            <ExampleText>
              <p>> This is a blockquote</p>
            </ExampleText>
            <ExampleText>
              <p>Make a horizontal rule with --- or ***</p>
            </ExampleText>
          </ExampleInput>
        </Column>
        <Column>
          <ExampleText>
            <h1>This is a heading 1</h1>
          </ExampleText>
          <ExampleText>
            <h2>This is a heading 2</h2>
          </ExampleText>
          <ExampleText>
            <a href="www.example.com">This is a hyperlink</a>
          </ExampleText>
          <ExampleText>
            <p>
              Italics work like <Italic>this</Italic> or like{" "}
              <Italic>this.</Italic>
            </p>
          </ExampleText>
          <ExampleText>
            <p>
              Bold text works like <Bold>this</Bold> or like <Bold>this.</Bold>
            </p>
          </ExampleText>
          <ExampleText>
            <BlockQuote>This is a blockquote</BlockQuote>
          </ExampleText>
          <ExampleText>
            <Hr />
          </ExampleText>
        </Column>
      </Row>
    </Main>
  );
};

Legend.propTypes = {
  handleLegendChange: PropTypes.func.isRequired
};

export default Legend;
