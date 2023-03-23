import "./style.css";

const TextField = ({ whenChanging, label, inValue, required, placeHolder }) => {
  const whenTyping = (event) => {
    whenChanging(event.target.value);
  };

  return (
    <div className="textField">
      <label>{label}</label>
      <input
        value={inValue}
        onChange={whenTyping}
        required={required}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default TextField;
