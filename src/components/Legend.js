import React from "react";
import PropTypes from "prop-types";

const Legend = ({ handleLegendChange }) => {
  const styles = {
    legend: {
      position: "relative",
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      background: "rgba(192, 192, 192, 0.3)",
      borderRadius: "10px",
      padding: "0px 10px",
      margin: "20px"
    },
    legendTitle: {
      width: "100%",
      textAlign: "center"
    },
    column: {
      width: "50%"
    },
    closeLegend: {
      position: "absolute",
      display: "block",
      top: "5px",
      right: "5px",
      margin: "5px",
      height: "1.3em",
      width: "1.3em",
      lineHeight: "1.3em",
      textAlign: "center",
      verticalAlign: "middle",
      borderRadius: "50%",
      fontSize: "1.2em",
      userSelect: "none"
    },
    rowDefineMarkdown: {
      display: "flex",
      borderRadius: "10px",
      background: "rgba(192, 192, 192, 0.3)"
    },
    defineMarkdown: {
      padding: "0px 5px 10px"
    }
  };

  return (
    <div className="legend" style={styles.legend}>
      <div
        className="close-legend"
        style={styles.closeLegend}
        onClick={handleLegendChange}
      >
        &#10006;
      </div>
      <h2 className="legend-title" style={styles.legendTitle}>
        Legend
      </h2>
      <div className="row-define-markdown" style={styles.rowDefineMarkdown}>
        <div
          className="column define-markdown"
          style={{ ...styles.column, ...styles.defineMarkdown }}
        >
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
      <div className="column example-input">
        <div className="example-text">
          <p>This is a heading 1</p>
          <p>===================</p>
        </div>
        <div className="example-text">
          <p>This is a heading 2</p>
          <p>-------------------</p>
        </div>
        <div className="example-text">
          <p>[This is a hyperlink](http://www.example.com)</p>
        </div>
        <div className="example-text">
          <p>Italics work like *this* or like _this_.</p>
        </div>
        <div className="example-text">
          <p>Bold text works like **this** or like __this__</p>
        </div>
        <div className="example-text">
          <p>> This is a blockquote</p>
        </div>
        <div className="example-text">
          <p>Make a horizontal rule with --- or ***</p>
        </div>
      </div>
      <div className="column">
        <div className="example-text">
          <h1>This is a heading 1</h1>
        </div>
        <div className="example-text">
          <h2>This is a heading 2</h2>
        </div>
        <div className="example-text">
          <a href="www.example.com">This is a hyperlink</a>
        </div>
        <div className="example-text">
          <p>
            Italics work like <span className="italic">this</span> or like{" "}
            <span className="italic">this.</span>
          </p>
        </div>
        <div className="example-text">
          <p>
            Bold text works like <span className="bold">this</span> or like{" "}
            <span className="bold">this.</span>
          </p>
        </div>
        <div className="example-text">
          <blockquote>This is a blockquote</blockquote>
        </div>
        <div className="example-text">
          <hr />
        </div>
      </div>
    </div>
  );
};

Legend.propTypes = {
  handleLegendChange: PropTypes.func.isRequired
};

export default Legend;
