import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./style.css";

const Card = ({
  name,
  office,
  image,
  id,
  backgroundColor,
  whenDeleting,
  favorite,
  byFavorite,
}) => {
  const favorited = () => {
    byFavorite(id);
  };

  const propsFavorite = {
    size: 26,
    onClick: favorited,
  };

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
        <div className="favorite">
          {favorite ? (
            <AiFillHeart color="red" {...propsFavorite} />
          ) : (
            <AiOutlineHeart {...propsFavorite} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
