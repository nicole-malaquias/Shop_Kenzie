const reducerCart = (state = [], action) => {
  switch (action.type) {
    case "ADD_CART":
      const { product } = action;
      return [...state, product];
    case "REMOVE":
      const { id } = action;
      const listaNova = state.filter((item) => item.id !== id);
      return listaNova;
    default:
      return state;
  }
};

export default reducerCart;
