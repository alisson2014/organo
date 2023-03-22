import "./style.css";

const Button = (props) => {
  return (
    <div className="buttonContainer">
      <button className="button">{props.children}</button>
    </div>
  );
};

export default Button;
