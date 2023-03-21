import { useState } from "react";
import "./style.css";

const TextField = (props) => {
  const [inValue, setInValue] = useState("Irineu");

  const whenTyping = (event) => {
    props.whenChanging(event.target.value);
  };

  return (
    <div className="textField">
      <label>{props.label}</label>
      <input
        value={props.inValue}
        onChange={whenTyping}
        required={props.required}
        placeholder={props.placeHolder}
      />
    </div>
  );
};

export default TextField;
