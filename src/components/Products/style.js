import styled from "styled-components";

const Container = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  div + div {
    margin: 5px;
  }
`;

export default Container;
