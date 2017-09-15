import React from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import Legend from './Legend';
import LegendButton from './LegendButton';
import Input from './Input';
import Output from '.Output';

class Previewer extends Component {
  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLegendChange = this.handleLegendChange.bind(this);
  }

  handleInputChange(e) {
    this.props.updateText(e.target.value);
  }

  handleLegendChange(e) {
    this.props.toggleLegend(!this.props.showLegend);
  }

  render() {
    return(
      <div className="previewer">
        <Title />
        {!this.props.showLegend && <LegendButton handleLegendChange={this.handleLegendChange}/>}
        {this.props.showLegend && <Legend handleLegendChange={this.handleLegendChange} />}
        <Input
          text={this.props.text}
          handleInputChange={this.handleInputChange}
        />
        <Output text={this.props.text} foo={this.props.foo}/>
      </div>
    );
  }
}

Previewer.propTypes = {
  text: PropTypes.string.isRequired,
  showLegend: PropTypes.boolean.isRequired,
  updateText: PropTypes.func.isRequired,
  handleLegendChange: PropTypes.func.isRequired
}

export default Previewer;
