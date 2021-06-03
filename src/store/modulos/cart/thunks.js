import { addToCart } from "./action";
import { removeFromCart } from "./action";

export const addToCarThunk = (product) => (dispatch, getStore) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];
  product.id = list.length !== 0 ? list[list.length].id + 1 : 1;
  list.push(product);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(addToCart(product));
};

export const removeFromCartThunk = (id) => (dispatch, getStore) => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const list = cart.filter((product) => product.id !== id);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(removeFromCart(list));
};
