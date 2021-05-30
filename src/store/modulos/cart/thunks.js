import { addToCart } from "./action";
import { removeFromCart } from "./action";
export const addToCarThunk = (product) => {
  return (dispatch, getStore) => {
    console.log(getStore);
    dispatch(addToCart(product));
  };
};

export const removeFromCartThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore();
  const list = cart.filter((product) => product.id !== id);
  localStorage.setItem("cart", JSON.stringfy(list));
  dispatch(removeFromCart(list));
};
