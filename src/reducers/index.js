import {combineReducers} from 'redux';
import text from './text';
import legendFilter from './legendFilter';

const reducer = combineReducers({
  text,
  legendFilter
});

export default reducer;
