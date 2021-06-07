import { useSelector } from "react-redux";
import { useState } from "react";
import Product from "../Product";
import Menu from "../Menu ";
import Container from "./style";

const Products = () => {
  const bridge = useSelector((store) => store.products);

  const [products, setProduct] = useState(bridge);
  const search = useSelector((store) => store.search);
  const [ordena, setOrdena] = useState("");

  const handleOrden = () => {
    var select = document.getElementById("Ordenar");
    var value = select.options[select.selectedIndex].value;
    setOrdena(value);
  };
  const OrdenaMaior = () => {
    const list = [...products];
    return (
      <>
        {list
          .sort((a, b) => b.price - a.price)
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </>
    );
  };
  const OrdenaMenor = () => {
    const list = [...products];
    return (
      <>
        {list
          .sort((a, b) => a.price - b.price)
          .map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </>
    );
  };
  const all = () => {
    return (
      <>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </>
    );
  };
  const Filter = () => {
    const list = [...products];
    console.log("chegou");
    return (
      <>
        {list.map(
          (product) =>
            product.name === search ||
            (product.type === search && (
              <Product key={product.id} product={product} />
            ))
        )}
      </>
    );
  };
  const FiltroOrdenaMaior = () => {
    const list = products
      .sort((a, b) => b.price - a.price)
      .map(
        (product) =>
          product.name === search ||
          (product.type === search && (
            <Product key={product.id} product={product} />
          ))
      );
  };
  const FiltroOrdenaMenor = () => {
    const list = products
      .sort((a, b) => a.price - b.price)
      .map(
        (product) =>
          product.name === search ||
          (product.type === search && (
            <Product key={product.id} product={product} />
          ))
      );
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

      {search === "" && ordena === "" && all()}
      {search === "" && ordena === "Maior" && OrdenaMaior()}
      {search === "" && ordena === "Menor" && OrdenaMenor()}
      {search !== "" && Filter()}
      {search !== "" && ordena === "Maior" && FiltroOrdenaMaior()}
      {search !== "" && ordena === "Menor" && FiltroOrdenaMenor()}
    </Container>
  );
};
export default Products;
