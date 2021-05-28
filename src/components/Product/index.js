import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/modulos/cart/action";
import { addToCarThunk } from "../../store/modulos/cart/thunks";
import ContainerProduto from "./style";

const Product = ({ product, isRemovable = false }) => {
  const dispatch = useDispatch();

  const { id, name, price } = product;

  return (
    <ContainerProduto>
      <div className="card">
        <h3>{name}</h3>
        <h3>R$ {price}</h3>
        <div className="btn">
          {isRemovable ? (
            <button onClick={() => dispatch(removeFromCart(id))}>
              Remover item do carrinho
            </button>
          ) : (
            <button onClick={() => dispatch(addToCarThunk(product))}>
              Adicionar item no carrinho
            </button>
          )}
        </div>
      </div>
    </ContainerProduto>
  );
};

export default Product;
