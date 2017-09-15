import {connect} from 'react-redux';
import {updateText, toggleLegend} from '../actions/PreviewerActions';
import Previewer from '../components/Previewer';

const mapStateToProps = state => {
  return {
    text: state.text,
    showLegend: state.showLegend
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
