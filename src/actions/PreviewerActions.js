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
