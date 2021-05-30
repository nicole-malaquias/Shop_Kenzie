const searchReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_INPUT":
      const { input } = action;
      return input;
    default:
      return state;
  }
};

export default searchReducer;
