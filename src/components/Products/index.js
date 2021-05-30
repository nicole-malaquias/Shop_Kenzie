import { useSelector } from "react-redux";
import Product from "../Product";
import Menu from "../Menu ";

import Container from "./style";
const Products = () => {
  const products = useSelector((store) => store.products);
  const search = useSelector((store) => store.search);

  return (
    <Container>
      <Menu />
      {console.log("valor", search)}
      {search === ""
        ? products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        : products.map(
            (product) =>
              product.name === search && (
                <Product key={product.id} product={product} />
              )
          )}
    </Container>
  );
};

export default Products;
