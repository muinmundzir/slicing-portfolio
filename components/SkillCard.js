const SkillCard = ({ name, level, image, imageClassName }) => {
  const addImageClassName = imageClassName ? `${imageClassName}` : '';
  return (
    <div className="bg-white shadow-card rounded-lg p-3 lg:p-6 flex items-center justify-center  md:justify-start">
      <img
        src={image}
        className={`h-8 md:h-12 lg:h-16 mr-6 ${addImageClassName}`}
      />
      <div>
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm text-gray-400 font-semibold mt-1">{level}</p>
      </div>
    </div>
  );
};

export default SkillCard;
