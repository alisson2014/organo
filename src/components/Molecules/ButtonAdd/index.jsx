import { BiAddToQueue } from "react-icons/bi";
import "./style.css";

const ButtonAdd = ({ isVisible }) => {
  return (
    <div className="addContainer">
      <p className="organization">Minha organização</p>
      <BiAddToQueue
        className="addButton"
        size={70}
        onClick={() => isVisible()}
      />
    </div>
  );
};

export default ButtonAdd;
