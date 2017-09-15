const UPDATE_TEXT = 'UPDATE_TEXT';
const TOGGLE_LEGEND = 'TOGGLE_LEGEND';

export const updateText = text => {
  return {
    type: UPDATE_TEXT,
    text
  }
};

export const toggleLegend = boolean => {
  return {
    type: TOGGLE_LEGEND,
    boolean
  }
};
