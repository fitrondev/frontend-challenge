type RegisterInputProps = {
  label?: string;
  type?: string;
  id?: string;
  placeholder?: string;
};

const RegisterInput: React.FC<RegisterInputProps> = ({
  label,
  type,
  id,
  placeholder,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        className="border py-3 px-3 rounded-md focus:outline-primary"
      />
    </div>
  );
};
export default RegisterInput;
