const Button = ({ children }) => {
  return (
    <a
      href="#"
      className="border border-yellow-500 text-yellow-500 py-2 px-8 rounded-full"
    >
      {children}
    </a>
  );
};

export default Button;
