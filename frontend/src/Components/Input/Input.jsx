import './Input.css';

const Input = ({
  type = 'text',
  placeholder,
  className,
  label,
  name,
  value,
  onChange,
  checked,
}) => {
  return (
    <div className="input">
      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        className={className}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
      />
    </div>
  );
};

export default Input;
