import styled from "styled-components";

const ContainerProduto = styled.div`
  background: #ffffff;
  display: flex;
  justify-content: center;
  text-align: center;
  width: 250px;
  border-top: 2px solid #f2521d;
  height: 300px;
  h3 {
    text-transform: uppercase;
  }
  button {
    display: none;
    position: relative;
    height: 40px;
    width: 150px;
    background: #f2521d;
    border: none;
    color: #ffff;
    font-weight: bolder;
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
  button:active {
    background: white;
    color: red;
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
  .zoom {
    overflow: hidden;
  }

  .zoom img {
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .zoom:hover img {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export default ContainerProduto;
