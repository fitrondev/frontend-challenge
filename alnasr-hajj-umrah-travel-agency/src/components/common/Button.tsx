type ButtonProps = {
  variant: "btn__primary" | "btn__secondary";
  children: React.ReactNode;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
  return (
    <button className={`${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
