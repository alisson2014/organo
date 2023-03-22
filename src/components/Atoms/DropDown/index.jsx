import "./style.css";

const DropDown = (props) => {
  return (
    <div className="dropDown">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.whenChanging(event.target.value)}
        value={props.inValue}
        required={props.required}
      >
        <option value=""></option>
        {props.items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropDown;
