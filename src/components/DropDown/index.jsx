import "./style.css";

const DropDown = (props) => {
  return (
    <div className="dropDown">
      <label>{props.label}</label>
      <select>
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
