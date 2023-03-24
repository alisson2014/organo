import "./style.css";

const Button = ({ text }) => {
  return (
    <div className="buttonContainer">
      <button className="button">{text}</button>
    </div>
  );
};

export default Button;
