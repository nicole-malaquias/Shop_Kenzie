import { Switch, Route } from "react-router-dom";
import Cart from "../components/Cart";
import Products from "../components/Products";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Products />
      </Route>
      <Route path="/Carrinho">
        <Cart />
      </Route>
    </Switch>
  );
};

export default Routes;
