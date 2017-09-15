import {combineReducers} from 'redux';
import text from './text';
import legend from './legendFilter';

const reducer = combineReducers({
  text,
  showLegend: legend
});

export default reducer;
