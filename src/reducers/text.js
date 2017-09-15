const text = (state = '', action) => {
  switch (action.type) {
    case UPDATE_TEXT:
      return ...state, text: action.text);
    default:
      return state;
  }
}
