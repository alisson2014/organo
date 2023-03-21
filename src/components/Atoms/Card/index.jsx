import "./style.css";

const Card = ({ name, office, image }) => {
  return (
    <div className="collaboratorCard">
      <div className="header">
        <img src={`https://github.com/${image}.png`} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{office}</h5>
      </div>
    </div>
  );
};

export default Card;
