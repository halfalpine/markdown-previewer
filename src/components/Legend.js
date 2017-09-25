import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Legend = ({ handleLegendChange }) => {
  const Legend = styled.div`
    .legend {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      background: rgba(192, 192, 192, 0.3);
      border-radius: 10px;
      padding: 0px 10px;
      margin: 20px;
      .legend-title {
        width: 100%;
        text-align: center;
      }
      .column {
        width: 50%;
      }
    }
  `;

  const CloseLegend = styled.div`
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      cursor: default;
    }
  `;

  const ExampleText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 75px;
    margin: 0px 5px;
    hr {
      color: red;
    }
  `;
  const ExampleInput = styled.div`
    font-family: monospace;
    .example-text {
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
  `;
  const Bold = styled.span`font-weight: bold;`;
  const Italic = styled.span`font-style: italic;`;
  const BlockQuote = styled.span`
    border-left: 2px solid white;
    padding: 0px 5px;
  `;
  const Hr = styled.hr`width: 100%;`;

  return (
    <Legend>
      <CloseLegend onClick={handleLegendChange}>&#10006;</CloseLegend>
      <h2 className="legend-title">Legend</h2>
      <div className="row-define-markdown">
        <div className="column define-markdown">
          <h3>What is Markdown?</h3>
          <blockquote cite="https://en.wikipedia.org/wiki/Markdown">
            Markdown is a lightweight markup language with plain text formatting
            syntax. It is designed so that it can be converted to HTML and many
            other formats using a tool by the same name.
          </blockquote>
        </div>
        <div className="column define-markdown">
          <h3>Why should I be excited?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            imperdiet risus a nisi facilisis congue. Donec condimentum
            sollicitudin lectus id congue. Nullam ultricies pulvinar tincidunt.
            Etiam vestibulum ut lectus eget cursus.
          </p>
        </div>
      </div>
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
      <div className="column">
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
      </div>
    </Legend>
  );
};

Legend.propTypes = {
  handleLegendChange: PropTypes.func.isRequired
};

export default Legend;
