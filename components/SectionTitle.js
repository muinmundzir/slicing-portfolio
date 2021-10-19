const SectionTitle = ({ children, left }) => {
  return (
    <>
      <h2
        className={`${
          !left ? 'text-center' : ''
        } text-2xl font-semibold font-mono`}
      >
        {children}
      </h2>
    </>
  );
};

export default SectionTitle;
