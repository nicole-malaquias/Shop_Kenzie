import freezer from "../../../assests/freezer.png";
import cooktop from "../../../assests/cooktop.png";
import coffee from "../../../assests/coffee.png";
import notebook from "../../../assests/notebook.png";
import phone from "../../../assests/phone.png";
import tv from "../../../assests/tv.png";
import wmachine from "../../../assests/wmachine.png";
import Kindle from "../../../assests/kindle.png";
import aspirador from "../../../assests/aspirador.png";
import arcondicionado from "../../../assests/arcondicionado.png";
const defaultState = [
  {
    id: 1,
    name: "Geladeira",
    price: 200,
    image: freezer,
    type: "eletro domestico",
  },
  {
    id: 2,
    name: "Fogão",
    price: 640,
    image: cooktop,
    type: "eletro domestico",
  },
  {
    id: 3,
    name: "Máquina de lavar",
    price: 420.0,
    image: wmachine,
    type: "eletro domestico",
  },
  { id: 4, name: "Kindle", price: 450, image: Kindle, type: "eletronico" },
  { id: 5, name: "Televisão", price: 500, image: tv, type: "eletro domestico" },
  { id: 6, name: "Celular", price: 340, image: phone, type: "eletronico" },
  { id: 7, name: "Notebook", price: 730, image: notebook, type: "eletronico" },
  {
    id: 8,
    name: "Cafeteira",
    price: 80,
    image: coffee,
    type: "eletro domestico",
  },
  {
    id: 9,
    name: "Aspirador",
    price: 280,
    image: aspirador,
    type: "eletro domestico",
  },
  {
    id: 10,
    name: "Ar Condicionado",
    price: 280,
    image: arcondicionado,
    type: "eletro domestico",
  },
];

const productsReducer = (state = defaultState, action) => {
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
