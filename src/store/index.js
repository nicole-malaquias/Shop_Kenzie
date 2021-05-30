import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "../store/modulos/cart/reducer";
import productsReducer from "../store/modulos/products/reducer";
import searchReducer from "../store/modulos/search/reducer";
const reducers = combineReducers({
  cart: cartReducer,
  products: productsReducer,
  search: searchReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
