import "./style.css";

const Field = ({
  type = "text",
  whenChanging,
  label,
  inValue,
  required = false,
  placeHolder,
}) => {
  const whenTyping = (event) => {
    whenChanging(event.target.value);
  };

  return (
    <div className={`field field-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={inValue}
        onChange={whenTyping}
        required={required}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default Field;
