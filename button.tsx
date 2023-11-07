interface props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: props) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
