const initialState = {
  text: 'foo',
  showLegend: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return Object.assign({}, state, {
        text: marked(action.text, {breaks: true})
      });
    case TOGGLE_LEGEND:
      return Object.assign({}, state, {
        showLegend: action.boolean
      });
    default:
      return state;
  }
};

export default reducer'
