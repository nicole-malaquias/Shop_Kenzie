import Container from "./style";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
//yarn add react-router-dom
const Menu = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <Container>
      <div className="menu">
        <div className="KenzieShop" onClick={() => sendTo("/")}>
          <h1>KenzieShop</h1>
        </div>
        <input
          className="input-menu"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Procurar</button>
        <div className="carrinho" onClick={() => sendTo("/Carrinho")}>
          <i class="fas fa-shopping-cart fa-2x"></i>
        </div>
      </div>
      {console.log(input)}
    </Container>
  );
};

export default Menu;
