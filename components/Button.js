const Button = ({ className, variant, children }) => {
  const addClassName = className ? ` ${className}` : '';
  const variants = {
    'outline-yellow': `border border-yellow-500 text-yellow-500`,
    yellow: 'bg-yellow-500 text-black',
  };
  const pickedVariant = variants[variant];
  return (
    <a
      href="#"
      className={`py-2 px-8 rounded-full inline-block ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
};

export default Button;
