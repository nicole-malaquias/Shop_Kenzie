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
    width: 100px;
    height: 100px;
    border: 3px solid red;
    font-size: 30px;
    position: absolute;
    right: 50px;
    bottom: 0;
  }
`;

export default Container;
