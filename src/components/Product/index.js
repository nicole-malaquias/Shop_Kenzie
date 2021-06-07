import { useDispatch } from "react-redux";
import {
  addToCarThunk,
  removeFromCartThunk,
} from "../../store/modulos/cart/thunks";
import ContainerProduto from "./style";

const Product = ({ product, isRemovable = false, trava, setTrava }) => {
  const dispatch = useDispatch();

  const { id, name, price, image } = product;

  const handleRemove = () => {
    dispatch(removeFromCartThunk(id));
    setTrava(!trava);
  };

  const handleAdd = () => {
    dispatch(addToCarThunk(product));
  };

  return (
    <ContainerProduto>
      <div className="card">
        <h3>{name}</h3>
        <h3>R$ {price}</h3>
        <h4>Até em 2x de {price / 2}</h4>
        <div className="zoom">
          <img src={image} className="img-responsive" />
        </div>
        <div className="btn">
          {isRemovable ? (
            <button className="btn produt" onClick={handleRemove}>
              Remover item do carrinho
            </button>
          ) : (
            <button className="btn produt" onClick={handleAdd}>
              Adicionar item no carrinho
            </button>
          )}
        </div>
      </div>
    </ContainerProduto>
  );
};

export default Product;
