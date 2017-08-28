import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Previewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      showLegend: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLegendChange = this.handleLegendChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleLegendChange(e) {
    this.setState({ showLegend: !this.state.showLegend });
  }

  render() {
    return(
      <div className="previewer">
        <Title />
        {!this.state.showLegend && <LegendButton handleLegendChange={this.handleLegendChange}/>}
        {this.state.showLegend && <Legend handleLegendChange={this.handleLegendChange} />}
        <Input
          text={this.state.text}
          handleInputChange={this.handleInputChange}
        />
        <Output text={this.state.text} foo={this.state.foo}/>
      </div>
    );
  }
}

const Title = () =>
  <div className="page-title">
    <h1>Markdown Previewer</h1>
  <p>A React project for <a href="https://www.freecodecamp.org/challenges/build-a-markdown-previewer">Free Code Camp</a></p>
  </div>

const LegendButton = ({handleLegendChange}) =>
  <button className="legend-button" onClick={handleLegendChange}>
    Show Legend
  </button>

const Legend = ({handleLegendChange}) =>
  <div className="legend">
  <div className="close-legend" onClick={handleLegendChange}>&#10006;</div>
    <h2 className="legend-title">Legend</h2>
      <div className="row-define-markdown">
      <div className="column define-markdown">
        <h3>What is Markdown?</h3>
        <blockquote cite="https://en.wikipedia.org/wiki/Markdown">Markdown is a lightweight markup language with plain text formatting syntax. It is designed so that it can be converted to HTML and many other formats using a tool by the same name.</blockquote>
      </div>
      <div className="column define-markdown">
        <h3>Why should I be excited?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet risus a nisi facilisis congue. Donec condimentum sollicitudin lectus id congue. Nullam ultricies pulvinar tincidunt. Etiam vestibulum ut lectus eget cursus.</p>
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
          <a href="#">This is a hyperlink</a>
        </div>
        <div className="example-text">
          <p>Italics work like <span className="italic">this</span> or like <span className="italic">this.</span></p>
        </div>
        <div className="example-text">
          <p>Bold text works like <span className="bold">this</span> or like <span className="bold">this.</span></p>
        </div>
        <div className="example-text">
          <blockquote>This is a blockquote</blockquote>
        </div>
        <div className="example-text">
          <hr />
        </div>
      </div>
  </div>

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

const Output = ({text}) =>
  <div className="md-component">
    <h2>This is the Output.</h2>
    <div
      className="textarea-output"
      dangerouslySetInnerHTML={{__html: marked(text, {breaks: true})}} />
  </div>

Previewer.propTypes = {
  text: PropTypes.string
}

Input.propTypes = {
  text: PropTypes.string
}

Output.propTypes = {
  text: PropTypes.string
}

ReactDOM.render(<Previewer/>, document.getElementById('app'));

export default Previewer;
