const Button = ({ className, variant, children, pill }) => {
  const addClassName = className ? ` ${className}` : '';
  const variants = {
    'outline-yellow': `border border-yellow-500 text-yellow-500`,
    yellow: 'bg-yellow-500 text-black',
    black: 'bg-black text-white',
  };
  const pickedVariant = variants[variant];
  return (
    <a
      href="#"
      className={`py-2 px-8 inline-block ${
        pill ? 'rounded-full' : ''
      } ${pickedVariant} ${addClassName}`}
    >
      {children}
    </a>
  );
};

export default Button;
