import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  .meu-carrinho {
    h1 {
      color: #3f3f40;
    }

    text-align: center;
    width: 100%;
  }
  div + div {
    margin: 3px;
  }
  .total {
    text-align: center;
    width: 200px;
    height: 100px;
    border: 3px solid red;
    font-size: 30px;
    position: absolute;
    right: 50px;
    top: 100px;
  }
`;

export default Container;
