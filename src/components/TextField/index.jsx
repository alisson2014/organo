import "./style.css";

const TextField = (props) => {
  return (
    <div className="textField">
      <label>{props.label}</label>
      <input required={props.required} placeholder={props.placeHolder} />
    </div>
  );
};

export default TextField;
