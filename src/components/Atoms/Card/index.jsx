import { AiFillCloseCircle } from "react-icons/ai";
import "./style.css";

const Card = ({ name, office, image, backgroundColor, whenDeleting, id }) => {
  return (
    <div className="collaboratorCard">
      <AiFillCloseCircle
        cursor="pointer"
        size={25}
        className="delete"
        onClick={() => whenDeleting(id)}
      />
      <div className="header" style={{ backgroundColor: backgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{office}</h5>
      </div>
    </div>
  );
};

export default Card;
