import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid white;
  background: #ed4f1c;

  input {
    height: 30px;
    width: 300px;
    border: none;
    border-radius: 30px 0 0 30px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    color: gray;
  }
  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: none;
  }

  button {
    cursor: pointer;
    height: 32px;
    background: #ffd511;
    border: none;
    border-radius: 0px 30px 30px 0px;
    border: none;
  }
  button:hover {
    background: white;
    border: 2px solid black;
  }
  h1 {
    color: #ffff;
    position: absolute;
    font-family: "Noto Sans HK", sans-serif;
    font-size: 40px;
    left: 60px;
    top: 0px;
  }
  .carrinho {
    position: absolute;
    right: 100px;
    top: 25px;
    height: 35px;
    width: 35px;
  }
  .KenzieShop {
    height: auto;
    width: auto;
  }
  .fa-shopping-cart {
    color: white;
  }
`;
export default Container;
