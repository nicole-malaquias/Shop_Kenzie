import freezer from "../../../assests/freezer.png";
import cooktop from "../../../assests/cooktop.png";
import coffee from "../../../assests/coffee.png";
import notebook from "../../../assests/notebook.png";
import phone from "../../../assests/phone.png";
import tv from "../../../assests/tv.png";
import wmachine from "../../../assests/wmachine.png";
import Kindle from "../../../assests/kindle.png";

const defaultState = [
  { id: 1, name: "Geladeira", price: 200, image: freezer },
  { id: 2, name: "Fogão", price: 640, image: cooktop },
  { id: 3, name: "Máquina de lavar", price: 420, image: wmachine },
  { id: 4, name: "Kindle", price: 450, image: Kindle },
  { id: 5, name: "Televisor", price: 500, image: tv },
  { id: 6, name: "Celular", price: 340, image: phone },
  { id: 7, name: "Notebook", price: 730, image: notebook },
  { id: 8, name: "Cafeteira", price: 80, image: coffee },
  { id: 9, name: "Cama", price: 280, image: "" },
];

const productsReducer = (state = defaultState, action) => {
  console.log("action do products", action);

  switch (action.type) {
    case "ADD_PROD":
      const { id } = action;
      const newList = state.map((item) =>
        item.id === id ? item.id + 1 : item.id
      );
      return newList;
    case "REMOVE_PROD":
      const newListRemove = state.map((item) =>
        item.id === id ? item.id - 1 : item.id
      );
      return newListRemove;
    default:
      return state;
  }
};

export default productsReducer;
