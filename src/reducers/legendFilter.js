const TOGGLE_LEGEND = 'TOGGLE_LEGEND';

const legend = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_LEGEND:
      return action.boolean;
    default:
      return state;
  }
}

export default legend;
