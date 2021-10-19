const ProjectCard = ({ image, description, name }) => {
  return (
    <article className="text-center shadow-card">
      <img src={image} className="w-full rounded-lg" />
      <h3 className="text-xl font-semibold mt-4 mb-1">{name}</h3>
      <p className="text-lg text-gray-400 py-4">{description}</p>
    </article>
  );
};

export default ProjectCard;
