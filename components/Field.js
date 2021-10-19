const Field = ({ label, name, type, className }) => {
  const addClassName = className ? `${className}` : '';
  const formControlClassName = `bg-white border border-gray py-3 px-6 w-full ${addClassName}`;
  return (
    <div className="mb-6">
      <label htmlFor="{name}" className="block mb-1 text-lg font-semibold">
        {label}
      </label>
      {type === 'text' && (
        <input
          type="text"
          name={name}
          id={name}
          className={formControlClassName}
        />
      )}
      {type === 'textarea' && (
        <textarea name={name} id={name} className={formControlClassName} />
      )}
    </div>
  );
};

export default Field;
