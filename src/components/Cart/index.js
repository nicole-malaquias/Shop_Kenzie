import React, { useState, useEffect } from "react";
import Product from "../Product";
import Menu from "../Menu ";

import Container from "./style";

const Cart = () => {
  const [carrinho, setCarrinho] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [trava, setTrava] = useState(false);

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("cart"));
    setCarrinho(temp);
  }, [trava]);

  return (
    <Container>
      <Menu />
      <div className="meu-carrinho">
        <h1> Meu carrinho de compras</h1>
      </div>
      {carrinho.map((product) => (
        <Product
          key={product.id}
          product={product}
          isRemovable
          trava={trava}
          setTrava={setTrava}
        />
      ))}
      <div className="total">
        <span> Valor total:</span>
        <br></br> R$ {carrinho.reduce((acc, item) => (acc += item.price), 0)}
      </div>
    </Container>
  );
};

export default Cart;
