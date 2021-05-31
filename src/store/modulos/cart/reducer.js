const reducerCart = (state = [], action) => {
  switch (action.type) {
    case "ADD_CART":
      const { product } = action;
      return [...state, product];
    case "REMOVE":
      const { lista } = action;
      return lista;
    default:
      return state;
  }
};

export default reducerCart;
