import styled from "styled-components";

const ContainerProduto = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 150px;
  border-top: 2px solid gray;
  height: 250px;
  button {
    display: none;
    position: relative;
    height: 30px;
    width: 100px;
    background: #3f8d89;
    border: none;
    color: #ffffff;
  }
  .card:hover {
    button {
      display: inline;
      animation: 1s move;
    }

    img {
      height: 100px;
      width: 100px;
    }
  }
  @keyframes move {
    from {
      top: -5px;
    }
    to {
      top: 0px;
      display: none;
    }
  }
`;

export default ContainerProduto;
