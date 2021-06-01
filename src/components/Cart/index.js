import { StrictMode } from "react";
import { useSelector } from "react-redux";

import Product from "../Product";
import Menu from "../Menu ";

import Container from "./style";
const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  return (
    <Container>
      <Menu />
      <div className="meu-carrinho">
        <h1> Meu carrinho de compras</h1>
      </div>
      {cart.map((product) => (
        <Product key={product.id} product={product} isRemovable />
      ))}
      <div className="total">
        R$ {cart.reduce((acc, item) => (acc += item.price), 0)}
      </div>
    </Container>
  );
};

export default Cart;
