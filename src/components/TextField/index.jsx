import "./style.css";

const TextField = (props) => {
  return (
    <div className="textField">
      <label>{props.label}</label>
      <input type="text" placeholder={props.placeHolder} />
    </div>
  );
};

export default TextField;
