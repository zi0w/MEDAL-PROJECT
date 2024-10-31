const MedalFormInput = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  max,
  min,
}) => {
  return (
    <div className="input-box">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        max={max}
        min={min}
      />
    </div>
  );
};

export default MedalFormInput;
