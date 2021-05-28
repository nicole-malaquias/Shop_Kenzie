import { useSelector } from "react-redux";
import Product from "../Product";
import Menu from "../Menu ";

import Container from "./style";
const Products = () => {
  const products = useSelector((store) => store.products);

  return (
    <Container>
      <Menu />
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default Products;
