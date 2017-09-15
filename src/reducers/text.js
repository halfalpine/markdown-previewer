const UPDATE_TEXT = 'UPDATE_TEXT';

const text = (state = 'foo', action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return action.text;
    default:
      return state;
  }
}

export default text;
