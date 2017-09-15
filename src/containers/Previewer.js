import React from 'react';
import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

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

export default Previewer;
