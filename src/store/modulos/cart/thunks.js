import { addToCart } from "./action";

export const addToCarThunk = (product) => {
  return (dispatch, getStore) => {
    console.log(getStore);
    dispatch(addToCart(product));
  };
};
