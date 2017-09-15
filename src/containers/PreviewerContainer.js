import {connect} from 'react-redux';
import {updateText, toggleLegend} from '../actions';
import Previewer from '../components/Previewer';

import marked from 'marked';

const mapStateToProps = state => {
  return {
    text: state.text,
    toggleLegend: state.toggleLegend
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateText: text => dispatch(updateText(text)),
    toggleLegend: boolean => dispatch(toggleLegend(boolean))
  }
}

const PreviewerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Previewer);

export default PreviewerContainer;
