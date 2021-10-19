const SectionParagraph = ({ left, children }) => {
  return (
    <p
      className={`text-gray-600 ${
        !left ? 'text-center' : ''
      } text-lg font-semibold font-mono mt-2`}
    >
      {children}
    </p>
  );
};

export default SectionParagraph;
