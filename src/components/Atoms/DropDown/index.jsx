import "./style.css";

const DropDown = ({ label, whenChanging, inValue, items, required }) => {
  return (
    <div className="dropDown">
      <label>{label}</label>
      <select
        onChange={(event) => whenChanging(event.target.value)}
        value={inValue}
        required={required}
      >
        <option value=""></option>
        {items.map((item, index) => {
          return <option key={index}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default DropDown;
