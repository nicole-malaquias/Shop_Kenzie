import { useSelector } from "react-redux";
import { useState } from "react";
import Product from "../Product";
import Menu from "../Menu ";
import Container from "./style";

const Products = () => {
  const products = useSelector((store) => store.products);
  const search = useSelector((store) => store.search);
  const [ordena, setOrdena] = useState("");

  const handleOrden = () => {
    var select = document.getElementById("Ordenar");
    var value = select.options[select.selectedIndex].value;
    setOrdena(value);
  };

  return (
    <Container>
      <Menu />
      <div className="select">
        <select id="Ordenar" onChange={handleOrden}>
          <option value=""> Ordenar:</option>
          <option value="Maior"> Maior para Menor</option>
          <option value="Menor"> Menor para Maior</option>
        </select>
      </div>

      {search === ""
        ? products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        : products.map(
            (product) =>
              product.name === search ||
              (product.type === search && (
                <Product key={product.id} product={product} />
              ))
          )}

      {ordena === "Menor" &&
        search === "" &&
        products
          .sort((a, b) => a.price - b.price)
          .map((product) => <Product key={product.id} product={product} />)}

      {ordena === "Maior" &&
        search === "" &&
        products
          .sort((a, b) => b.price - a.price)
          .map((product) => <Product key={product.id} product={product} />)}

      {search !== "" && ordena === "Menor" && console.log("oi")}

      {search !== "" &&
        ordena === "Maior" &&
        products
          .sort((a, b) => b.price - a.price)
          .map(
            (product) =>
              product.name === search ||
              (product.type === search && (
                <Product key={product.id} product={product} />
              ))
          )}
    </Container>
  );
};
export default Products;
